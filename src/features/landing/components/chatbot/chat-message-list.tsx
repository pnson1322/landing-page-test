"use client";

import { useEffect, useRef } from "react";

import { ChatMessageBubble } from "@/features/landing/components/chatbot/chat-message-bubble";
import { TypingIndicator } from "@/features/landing/components/chatbot/typing-indicator";
import type { ChatMessage } from "@/features/landing/types/landing";

type ChatMessageListProps = {
  isTyping: boolean;
  messages: ChatMessage[];
};

export function ChatMessageList({ isTyping, messages }: ChatMessageListProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isTyping, messages]);

  return (
    <div className="hidden-scrollbar flex-1 space-y-4 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <ChatMessageBubble key={message.id} message={message} />
      ))}
      {isTyping ? (
        <div className="flex gap-2">
          <span className="mt-1 h-7 w-7 rounded-full bg-primary-light" />
          <div className="rounded-2xl rounded-bl-md border border-border bg-surface-alt px-4 py-2.5 shadow-card">
            <TypingIndicator />
          </div>
        </div>
      ) : null}
      <div ref={endRef} />
    </div>
  );
}
