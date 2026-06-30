import type { ProductDetail } from "@/features/landing/types/landing";

type ProductDetailCardProps = {
  detail: ProductDetail;
  index: number;
};

export function ProductDetailCard({ detail, index }: ProductDetailCardProps) {
  return (
    <article className="group rounded-lg border border-[#e2ded5] bg-[#fbfaf7] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#147a7e] hover:bg-white hover:shadow-[0_20px_40px_rgba(23,33,43,0.1)]">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-[#147a7e] text-sm font-semibold text-white transition duration-200 group-hover:bg-[#c46c35]">
        {index + 1}
      </div>
      <h3 className="text-base font-semibold text-[#17212b]">
        {detail.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#53616b]">
        {detail.description}
      </p>
    </article>
  );
}
