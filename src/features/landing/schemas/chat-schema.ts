import { z } from "zod";

import { CHATBOT_LIMITS } from "@/features/landing/constants/chatbot";

export const chatMessageSchema = z.object({
  content: z.string().trim().min(1).max(CHATBOT_LIMITS.maxMessageLength),
  role: z.enum(["assistant", "user"]),
});

export const chatRequestSchema = z.object({
  history: z.array(chatMessageSchema).max(12).default([]),
  message: z.string().trim().min(1).max(CHATBOT_LIMITS.maxMessageLength),
});

export type ChatRequestPayload = z.infer<typeof chatRequestSchema>;
