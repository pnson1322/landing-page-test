import { newsletterSchema } from "@/features/landing/schemas/newsletter-schema";

const SOURCE = "aurahub-landing-newsletter";

export async function POST(request: Request) {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ message: "Webhook is not configured." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ message: "Invalid subscription data." }, { status: 400 });
  }

  const payload = {
    type: "form_submit",
    name: parsed.data.name,
    email: parsed.data.email,
    timestamp: new Date().toISOString(),
    source: SOURCE,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return Response.json({ message: "Webhook request failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
