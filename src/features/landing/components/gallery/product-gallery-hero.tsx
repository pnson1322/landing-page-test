import { GalleryNavButtons } from "@/features/landing/components/gallery/gallery-nav-buttons";
import { ImageOverlay } from "@/features/landing/components/gallery/image-overlay";
import { SkeletonImage } from "@/features/landing/components/motion/skeleton-image";
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
    <div className="h-full rounded-3xl bg-surface shadow-card transition duration-300 hover:scale-[1.004] hover:shadow-elevated">
      <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-background">
        <button
          type="button"
          onClick={onOpen}
          aria-label="Mở ảnh sản phẩm phóng to"
          className="group relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <SkeletonImage
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
