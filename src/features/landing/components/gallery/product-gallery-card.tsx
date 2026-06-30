import Image from "next/image";

import type { ProductGalleryItem } from "@/features/landing/types/landing";

type ProductGalleryCardProps = {
  item: ProductGalleryItem;
};

export function ProductGalleryCard({ item }: ProductGalleryCardProps) {
  const { image, isActive, onSelect } = item;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "true" : undefined}
      className={`group relative grid min-h-[168px] grid-cols-[112px_1fr] items-center gap-4 rounded-lg border px-4 py-3.5 text-left transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147a7e] active:scale-[0.995] lg:min-h-[176px] xl:min-h-[196px] ${
        isActive
          ? "border-[#147a7e]/35 bg-[#f0faf7] shadow-[0_18px_44px_rgba(20,122,126,0.14)]"
          : "border-[#e2ded5] bg-white/82 hover:-translate-y-0.5 hover:bg-white/94 hover:shadow-[0_16px_38px_rgba(23,33,43,0.1)]"
      }`}
    >
      {isActive ? (
        <span className="absolute left-0 top-4 h-[calc(100%-2rem)] w-1 rounded-r-full bg-[#147a7e]" />
      ) : null}
      <Image
        src={image.src}
        alt=""
        width={220}
        height={160}
        sizes="112px"
        className="h-24 w-28 rounded-md object-cover shadow-[0_10px_20px_rgba(23,33,43,0.08)] transition duration-200 group-hover:scale-[1.018]"
      />
      <span className="self-center">
        <span
          className={`block text-base font-semibold transition-colors duration-200 ${
            isActive
              ? "text-[#0d5f63]"
              : "text-[#17212b] group-hover:text-[#147a7e]"
          }`}
        >
          {image.title}
        </span>
        <span className="mt-2 line-clamp-3 block text-sm leading-6 text-[#53616b]">
          {image.description}
        </span>
      </span>
    </button>
  );
}
