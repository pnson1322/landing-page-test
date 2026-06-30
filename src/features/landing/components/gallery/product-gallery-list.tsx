import { ProductGalleryCard } from "@/features/landing/components/gallery/product-gallery-card";
import type { ProductGalleryItem } from "@/features/landing/types/landing";

type ProductGalleryListProps = {
  items: ProductGalleryItem[];
};

export function ProductGalleryList({ items }: ProductGalleryListProps) {
  return (
    <div className="hidden-scrollbar grid max-h-[560px] gap-3.5 overflow-y-auto p-0 sm:grid-cols-2 lg:h-full lg:max-h-none lg:grid-cols-1 xl:gap-4">
      {items.map((item) => (
        <ProductGalleryCard key={item.image.src} item={item} />
      ))}
    </div>
  );
}
