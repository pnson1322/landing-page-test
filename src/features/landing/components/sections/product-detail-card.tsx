import { Reveal } from "@/features/landing/components/motion/reveal";
import { cardStyles } from "@/features/landing/constants/styles";
import type { ProductDetail } from "@/features/landing/types/landing";

type ProductDetailCardProps = {
  delayMs?: number;
  detail: ProductDetail;
  index: number;
};

export function ProductDetailCard({
  delayMs = 0,
  detail,
  index,
}: ProductDetailCardProps) {
  return (
    <Reveal
      as="article"
      className={`group p-5 ${cardStyles.base} ${cardStyles.hover}`}
      delayMs={delayMs}
      threshold={0.16}
    >
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-surface transition duration-200 group-hover:bg-accent">
        {index + 1}
      </div>
      <h3 className="text-base font-semibold text-text-primary">
        {detail.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {detail.description}
      </p>
    </Reveal>
  );
}
