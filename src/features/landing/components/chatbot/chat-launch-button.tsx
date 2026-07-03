import { MessageCircle } from "lucide-react";

import { focusStyles } from "@/features/landing/constants/styles";

type ChatLaunchButtonProps = {
  onClick: () => void;
};

export function ChatLaunchButton({ onClick }: ChatLaunchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Mở AuraHub Assistant"
      className={`fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-surface shadow-primary transition duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-primary-dark active:scale-[0.98] sm:bottom-6 sm:right-6 ${focusStyles}`}
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6" strokeWidth={2.3} />
    </button>
  );
}
