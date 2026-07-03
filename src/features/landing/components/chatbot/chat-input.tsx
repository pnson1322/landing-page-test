"use client";

import { Send } from "lucide-react";
import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useRef } from "react";

import { focusStyles } from "@/features/landing/constants/styles";

type ChatInputProps = {
  canSend: boolean;
  characterCount: number;
  input: string;
  isSending: boolean;
  maxLength: number;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function ChatInput({
  canSend,
  characterCount,
  input,
  isSending,
  maxLength,
  onChange,
  onSubmit,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, [input]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();
    onSubmit();
  }

  const isOverLimit = characterCount > maxLength;
  const shouldShowCounter = characterCount > 200;
  const isNearLimit = characterCount >= Math.floor(maxLength * 0.9);

  return (
    <form
      className="border-t border-border bg-surface/92 p-3 backdrop-blur"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3.5">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Nhập tin nhắn cho AuraHub Assistant</span>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isSending}
            rows={1}
            maxLength={maxLength + 40}
            spellCheck={false}
            placeholder="Hỏi về AuraHub..."
            className="hidden-scrollbar min-h-12 max-h-[120px] w-full resize-none overflow-y-auto rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-[1.5] text-text-primary outline-none transition duration-200 placeholder:text-text-secondary focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </label>
        <button
          type="submit"
          disabled={!canSend}
          aria-label="Gửi tin nhắn"
          className={`grid h-11 w-11 flex-none place-items-center rounded-full bg-primary text-surface shadow-primary transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0 disabled:hover:scale-100 ${focusStyles}`}
        >
          <Send aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
        </button>
      </div>
      {shouldShowCounter ? (
        <p
          className={`mt-1 pr-[52px] text-right text-[11px] ${
            isOverLimit
              ? "text-red-500"
              : isNearLimit
                ? "text-accent"
                : "text-text-secondary"
          }`}
        >
          {characterCount}/{maxLength}
        </p>
      ) : null}
    </form>
  );
}
