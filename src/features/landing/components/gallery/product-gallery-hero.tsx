import Image from "next/image";

import { GalleryNavButtons } from "@/features/landing/components/gallery/gallery-nav-buttons";
import { ImageOverlay } from "@/features/landing/components/gallery/image-overlay";
import type { ProductImage } from "@/features/landing/types/landing";

type ProductGalleryHeroProps = {
  counter: string;
  image: ProductImage;
  onNext: () => void;
  onOpen: () => void;
  onPrevious: () => void;
};

export function ProductGalleryHero({
  counter,
  image,
  onNext,
  onOpen,
  onPrevious,
}: ProductGalleryHeroProps) {
  return (
    <div className="h-full rounded-lg bg-white shadow-[0_24px_70px_rgba(23,33,43,0.1)] transition duration-300 hover:scale-[1.004] hover:shadow-[0_32px_92px_rgba(23,33,43,0.16)]">
      <div className="relative h-full overflow-hidden rounded-lg border border-[#ddd7cc] bg-[#f7f5f0]">
        <button
          type="button"
          onClick={onOpen}
          aria-label="Mở ảnh sản phẩm phóng to"
          className="group block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147a7e]"
        >
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 62vw, 100vw"
            className="aspect-[16/9] h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] lg:aspect-auto"
            priority
          />
        </button>
        <ImageOverlay
          counter={counter}
          title={image.title}
          description={image.description}
        />
        <GalleryNavButtons onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
}
