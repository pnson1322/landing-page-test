import { ArrowUp } from "lucide-react";

import { focusStyles } from "@/features/landing/constants/styles";

type ScrollToTopButtonProps = {
  onClick: () => void;
};

export function ScrollToTopButton({ onClick }: ScrollToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cuộn lên đầu trang"
      className={`group fixed bottom-[94px] right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-surface/92 text-primary shadow-elevated backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 hover:bg-primary-light hover:shadow-primary active:scale-[0.98] sm:bottom-[98px] sm:right-6 ${focusStyles}`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-light/70 transition duration-200 group-hover:bg-surface">
        <ArrowUp aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
      </span>
    </button>
  );
}
