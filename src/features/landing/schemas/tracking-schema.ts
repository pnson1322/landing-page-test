import { z } from "zod";

export const trackingEventSchema = z.object({
  type: z.enum(["cta_click", "carousel_nav", "scroll_milestone", "form_submit"]),
  label: z.string().min(1),
  timestamp: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type TrackingEventPayload = z.infer<typeof trackingEventSchema>;
