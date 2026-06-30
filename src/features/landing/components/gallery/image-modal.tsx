import Image from "next/image";
import type { MouseEvent } from "react";

import { GalleryNavButtons } from "@/features/landing/components/gallery/gallery-nav-buttons";
import { ModalCaption } from "@/features/landing/components/gallery/modal-caption";
import type { GalleryModalState, ProductImage } from "@/features/landing/types/landing";

type ImageModalProps = {
  image: ProductImage;
  modal: GalleryModalState;
  onClose: () => void;
  onContentClick: (event: MouseEvent) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function ImageModal({
  image,
  modal,
  onClose,
  onContentClick,
  onNext,
  onPrevious,
}: ImageModalProps) {
  if (!modal.isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md ${
        modal.isClosing
          ? "gallery-modal-backdrop-exit"
          : "gallery-modal-backdrop-enter"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative h-[88vh] w-[90vw] max-w-[1600px] ${
          modal.isClosing
            ? "gallery-modal-content-exit"
            : "gallery-modal-content-enter"
        }`}
        onClick={onContentClick}
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="90vw"
          className="object-contain drop-shadow-[0_34px_88px_rgba(0,0,0,0.38)]"
          priority
        />
        <ModalCaption title={image.title} description={image.description} />
        <GalleryNavButtons
          variant="modal"
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="ÄĂ³ng áº£nh phĂ³ng to"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/86 text-2xl leading-none text-[#17212b] shadow-[0_16px_38px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-200 hover:scale-105 hover:bg-white hover:shadow-[0_22px_48px_rgba(0,0,0,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-100 sm:right-6 sm:top-6"
      >
        Ă—
      </button>
    </div>
  );
}
