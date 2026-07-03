import { CHATBOT_SYSTEM_PROMPT } from "@/features/landing/constants/chatbot";
import { chatRequestSchema } from "@/features/landing/schemas/chat-schema";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "gemini-3.1-flash-lite";

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
  error?: {
    message?: string;
  };
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Missing GEMINI_API_KEY" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = chatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: "Invalid chat payload" }, { status: 400 });
  }

  const model = process.env.GEMINI_MODEL ?? DEFAULT_MODEL;
  let response: Response;

  try {
    response = await fetch(
      `${GEMINI_API_URL}/models/${model}:generateContent?key=${apiKey}`,
      {
        body: JSON.stringify({
          contents: [
            ...parsed.data.history.map((message) => ({
              role: message.role === "assistant" ? "model" : "user",
              parts: [{ text: message.content }],
            })),
            {
              role: "user",
              parts: [{ text: parsed.data.message }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 220,
            temperature: 0.35,
          },
          systemInstruction: {
            parts: [{ text: CHATBOT_SYSTEM_PROMPT }],
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );
  } catch {
    return Response.json({ error: "Gemini request failed" }, { status: 502 });
  }

  const data = (await response.json().catch(() => null)) as GeminiResponse | null;

  if (!response.ok) {
    return Response.json(
      { error: data?.error?.message ?? "Gemini request failed" },
      { status: 502 },
    );
  }

  const reply = data?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();

  if (!reply) {
    return Response.json(
      { error: "Gemini did not return a response" },
      { status: 502 },
    );
  }

  return Response.json({ reply });
}
