import { Bot, X } from "lucide-react";

import { ChatInput } from "@/features/landing/components/chatbot/chat-input";
import { ChatMessageList } from "@/features/landing/components/chatbot/chat-message-list";
import { focusStyles } from "@/features/landing/constants/styles";
import type { ChatMessage } from "@/features/landing/types/landing";

type ChatPanelProps = {
  canSend: boolean;
  characterCount: number;
  input: string;
  isClosing: boolean;
  isSending: boolean;
  maxLength: number;
  messages: ChatMessage[];
  onChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

export function ChatPanel({
  canSend,
  characterCount,
  input,
  isClosing,
  isSending,
  maxLength,
  messages,
  onChange,
  onClose,
  onSubmit,
}: ChatPanelProps) {
  return (
    <section
      aria-label="AuraHub Assistant"
      className={`fixed inset-x-3 bottom-3 top-3 z-40 flex overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[540px] sm:w-[390px] ${
        isClosing ? "chatbot-panel-exit" : "chatbot-panel-enter"
      }`}
    >
      <div className="flex min-h-0 w-full flex-col">
        <header className="flex items-center justify-between bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-surface shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-surface/92 text-primary shadow-card">
              <Bot aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div>
              <h2 className="text-sm font-bold">
                AuraHub Assistant
              </h2>
              <p className="text-xs text-surface/80">
                Tư vấn nhanh về sản phẩm
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng AuraHub Assistant"
            className={`grid h-9 w-9 place-items-center rounded-full text-surface/82 transition duration-200 hover:bg-surface/18 hover:text-surface active:scale-[0.98] ${focusStyles}`}
          >
            <X aria-hidden="true" className="h-4 w-4" strokeWidth={2.3} />
          </button>
        </header>
        <ChatMessageList messages={messages} isTyping={isSending} />
        <ChatInput
          canSend={canSend}
          characterCount={characterCount}
          input={input}
          isSending={isSending}
          maxLength={maxLength}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
