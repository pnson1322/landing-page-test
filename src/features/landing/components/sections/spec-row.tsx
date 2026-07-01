import type { ProductSpec } from "@/features/landing/types/landing";

type SpecRowProps = {
  spec: ProductSpec;
};

export function SpecRow({ spec }: SpecRowProps) {
  return (
    <div className="grid gap-2 px-5 py-5 transition-colors duration-200 hover:bg-primary-light/45 sm:grid-cols-[160px_1fr] sm:px-6">
      <dt className="text-sm font-semibold text-text-primary">{spec.label}</dt>
      <dd className="text-sm leading-6 text-text-secondary">{spec.value}</dd>
    </div>
  );
}
