import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryNavButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
  variant?: "image" | "modal";
};

const buttonStyles = {
  image:
    "rounded-full bg-surface/90 text-text-primary shadow-card backdrop-blur-lg hover:bg-surface hover:shadow-elevated",
  modal:
    "rounded-full bg-surface/84 text-text-primary shadow-elevated backdrop-blur-xl hover:bg-surface",
};

export function GalleryNavButtons({
  onNext,
  onPrevious,
  variant = "image",
}: GalleryNavButtonsProps) {
  const sizeClass = variant === "modal" ? "h-12 w-12" : "h-11 w-11";
  const wrapperClass =
    variant === "modal"
      ? "pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between sm:inset-x-5"
      : "absolute right-4 top-4 flex gap-2";

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Xem ảnh trước"
        className={`pointer-events-auto grid ${sizeClass} min-h-11 min-w-11 place-items-center transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface active:scale-100 ${buttonStyles[variant]}`}
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={2.6} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Xem ảnh tiếp theo"
        className={`pointer-events-auto grid ${sizeClass} min-h-11 min-w-11 place-items-center transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface active:scale-100 ${buttonStyles[variant]}`}
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={2.6} />
      </button>
    </div>
  );
}
