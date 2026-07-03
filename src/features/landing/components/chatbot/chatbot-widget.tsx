"use client";

import { ChatLaunchButton } from "@/features/landing/components/chatbot/chat-launch-button";
import { ChatPanel } from "@/features/landing/components/chatbot/chat-panel";
import { useChatbot } from "@/features/landing/hooks/use-chatbot";

export function ChatbotWidget() {
  const chatbot = useChatbot();

  return (
    <>
      {chatbot.isOpen ? (
        <ChatPanel
          canSend={chatbot.canSend}
          characterCount={chatbot.characterCount}
          input={chatbot.input}
          isClosing={chatbot.isClosing}
          isSending={chatbot.isSending}
          maxLength={chatbot.maxMessageLength}
          messages={chatbot.messages}
          onChange={chatbot.setInput}
          onClose={chatbot.closeChat}
          onSubmit={chatbot.sendMessage}
        />
      ) : (
        <ChatLaunchButton onClick={chatbot.openChat} />
      )}
    </>
  );
}
