import Image from "next/image";
import { forwardRef } from "react";

import type { ProductGalleryItem } from "@/features/landing/types/landing";

type ProductGalleryCardProps = {
  item: ProductGalleryItem;
};

export const ProductGalleryCard = forwardRef<
  HTMLButtonElement,
  ProductGalleryCardProps
>(function ProductGalleryCard({ item }, ref) {
  const { image, isActive, onSelect } = item;

  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "true" : undefined}
      className={`group relative grid min-h-[168px] grid-cols-[112px_1fr] items-center gap-4 rounded-xl border pl-4 pt-3.5 text-left transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.995] lg:min-h-[176px] xl:min-h-[196px] ${
        isActive
          ? "border-primary/55 bg-primary-light/70 pb-5 pr-5 shadow-card"
          : "border-border bg-surface pb-3.5 pr-4 hover:-translate-y-0.5 hover:bg-primary-light/35 hover:shadow-card"
      }`}
    >
      {isActive ? (
        <span className="absolute left-0 top-4 h-[calc(100%-2rem)] w-1 rounded-r-full bg-primary" />
      ) : null}
      <Image
        src={image.src}
        alt=""
        width={220}
        height={160}
        sizes="112px"
        className="h-24 w-28 rounded-xl object-cover shadow-card transition duration-200 group-hover:scale-[1.018]"
      />
      <span className="self-center">
        <span
          className={`block text-base font-semibold transition-colors duration-200 ${
            isActive
              ? "text-primary"
              : "text-text-primary group-hover:text-primary"
          }`}
        >
          {image.title}
        </span>
        <span className="mt-2 line-clamp-3 block text-sm leading-6 text-text-secondary">
          {image.description}
        </span>
      </span>
    </button>
  );
});
