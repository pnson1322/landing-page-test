import { ProductGalleryCard } from "@/features/landing/components/gallery/product-gallery-card";
import { Reveal } from "@/features/landing/components/motion/reveal";
import type { ProductGalleryItem } from "@/features/landing/types/landing";

type ProductGalleryListProps = {
  items: ProductGalleryItem[];
  registerItem: (index: number) => (element: HTMLButtonElement | null) => void;
};

export function ProductGalleryList({
  items,
  registerItem,
}: ProductGalleryListProps) {
  return (
    <div className="hidden-scrollbar grid max-h-[560px] gap-3.5 overflow-y-auto p-0 sm:grid-cols-2 lg:h-full lg:max-h-none lg:grid-cols-1 xl:gap-4">
      {items.map((item, index) => (
        <Reveal key={item.image.src} delayMs={index * 70} threshold={0.12}>
          <ProductGalleryCard ref={registerItem(index)} item={item} />
        </Reveal>
      ))}
    </div>
  );
}
