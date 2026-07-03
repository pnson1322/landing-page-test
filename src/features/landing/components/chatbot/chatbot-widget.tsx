"use client";

import { ChatLaunchButton } from "@/features/landing/components/chatbot/chat-launch-button";
import { ChatPanel } from "@/features/landing/components/chatbot/chat-panel";
import { ScrollToTopButton } from "@/features/landing/components/ui/scroll-to-top-button";
import { useChatbot } from "@/features/landing/hooks/use-chatbot";
import { useScrollToTop } from "@/features/landing/hooks/use-scroll-to-top";

export function ChatbotWidget() {
  const chatbot = useChatbot();
  const scrollTop = useScrollToTop();

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
        <>
          {scrollTop.isVisible ? (
            <ScrollToTopButton onClick={scrollTop.scrollToTop} />
          ) : null}
          <ChatLaunchButton onClick={chatbot.openChat} />
        </>
      )}
    </>
  );
}
