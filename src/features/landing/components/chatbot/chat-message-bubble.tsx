import { Bot } from "lucide-react";

import type { ChatMessage } from "@/features/landing/types/landing";

type ChatMessageBubbleProps = {
  message: ChatMessage;
};

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser ? (
        <span className="mt-1 grid h-7 w-7 flex-none place-items-center rounded-full bg-primary-light text-primary">
          <Bot aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
        </span>
      ) : null}
      <p
        className={`max-w-[78%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6 shadow-card ${
          isUser
            ? "rounded-br-md bg-primary text-surface"
            : "rounded-bl-md border border-border bg-surface-alt text-text-primary"
        }`}
      >
        {message.content}
      </p>
    </div>
  );
}
