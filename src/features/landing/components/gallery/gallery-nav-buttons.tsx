type GalleryNavButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
  variant?: "image" | "modal";
};

const buttonStyles = {
  image:
    "rounded-md bg-white/88 text-[#17212b] shadow-[0_12px_28px_rgba(23,33,43,0.18)] backdrop-blur-lg hover:bg-white hover:shadow-[0_18px_34px_rgba(23,33,43,0.24)]",
  modal:
    "rounded-full bg-white/82 text-[#17212b] shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-xl hover:bg-white hover:shadow-[0_24px_52px_rgba(0,0,0,0.32)]",
};

export function GalleryNavButtons({
  onNext,
  onPrevious,
  variant = "image",
}: GalleryNavButtonsProps) {
  const sizeClass = variant === "modal" ? "h-12 w-12 text-2xl" : "h-11 w-11 text-xl";
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
        className={`pointer-events-auto flex ${sizeClass} items-center justify-center font-semibold transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-100 ${buttonStyles[variant]}`}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Xem ảnh tiếp theo"
        className={`pointer-events-auto flex ${sizeClass} items-center justify-center font-semibold transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-100 ${buttonStyles[variant]}`}
      >
        ›
      </button>
    </div>
  );
}
