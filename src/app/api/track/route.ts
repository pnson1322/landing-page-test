import { trackingEventSchema } from "@/features/landing/schemas/tracking-schema";

const SOURCE = "aurahub-landing-newsletter";

export async function POST(request: Request) {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ ok: true, skipped: true });
  }

  const body = await request.json().catch(() => null);
  const parsed = trackingEventSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ message: "Invalid tracking data." }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    source: SOURCE,
    timestamp: parsed.data.timestamp ?? new Date().toISOString(),
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return Response.json({ ok: true, skipped: true });
  }

  return Response.json({ ok: true });
}
