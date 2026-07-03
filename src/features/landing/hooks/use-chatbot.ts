"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  CHATBOT_LIMITS,
  CHATBOT_WELCOME_MESSAGE,
} from "@/features/landing/constants/chatbot";
import type { ChatMessage } from "@/features/landing/types/landing";

const ERROR_MESSAGE =
  "Xin lỗi, mình đang gặp sự cố kết nối, bạn thử lại sau nhé.";
const LIMIT_MESSAGE =
  "Bạn đã đạt giới hạn tin nhắn cho phiên này, vui lòng thử lại sau.";

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    content,
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
  };
}

function getStoredCount() {
  if (typeof window === "undefined") {
    return 0;
  }

  return Number(sessionStorage.getItem(CHATBOT_LIMITS.storageKey) ?? "0");
}

function storeCount(count: number) {
  sessionStorage.setItem(CHATBOT_LIMITS.storageKey, String(count));
}

export function useChatbot() {
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [input, setInput] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", CHATBOT_WELCOME_MESSAGE),
  ]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const characterCount = input.length;
  const trimmedInput = input.trim();
  const canSend =
    trimmedInput.length > 0 &&
    trimmedInput.length <= CHATBOT_LIMITS.maxMessageLength &&
    !isSending;

  const chatHistory = useMemo(
    () =>
      messages
        .filter((message) => message.content !== CHATBOT_WELCOME_MESSAGE)
        .slice(-10),
    [messages],
  );

  function openChat() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setIsClosing(false);
    setIsOpen(true);
  }

  function closeChat() {
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  }

  async function sendMessage() {
    if (!canSend) {
      return;
    }

    const sentCount = getStoredCount();

    if (sentCount >= CHATBOT_LIMITS.maxMessagesPerSession) {
      setMessages((current) => [
        ...current,
        createMessage("assistant", LIMIT_MESSAGE),
      ]);
      return;
    }

    const userMessage = createMessage("user", trimmedInput);
    storeCount(sentCount + 1);
    setInput("");
    setIsSending(true);
    setMessages((current) => [...current, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        body: JSON.stringify({
          history: chatHistory,
          message: userMessage.content,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const data = (await response.json().catch(() => null)) as {
        reply?: string;
      } | null;

      if (!response.ok || !data?.reply) {
        throw new Error("Chat request failed");
      }

      const reply = data.reply;
      setMessages((current) => [
        ...current,
        createMessage("assistant", reply),
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        createMessage("assistant", ERROR_MESSAGE),
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return {
    canSend,
    characterCount,
    closeChat,
    input,
    isClosing,
    isOpen,
    isSending,
    maxMessageLength: CHATBOT_LIMITS.maxMessageLength,
    messages,
    openChat,
    sendMessage,
    setInput,
  };
}
