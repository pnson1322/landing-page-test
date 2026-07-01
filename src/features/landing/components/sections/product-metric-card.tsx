import { Activity, Clock3, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProductMetricIcon = "signals" | "monitoring" | "power";

type ProductMetricCardProps = {
  icon: ProductMetricIcon;
  label: string;
  value: string;
};

const metricIcons: Record<ProductMetricIcon, LucideIcon> = {
  signals: Activity,
  monitoring: Clock3,
  power: Zap,
};

export function ProductMetricCard({ icon, label, value }: ProductMetricCardProps) {
  const Icon = metricIcons[icon];

  return (
    <div className="rounded-xl border border-surface/55 bg-surface/72 p-3 shadow-card backdrop-blur-2xl transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-surface/82 hover:shadow-elevated sm:p-4">
      <div className="mb-2.5 grid h-9 w-9 place-items-center rounded-full bg-primary-light text-accent sm:mb-3 sm:h-10 sm:w-10">
        <Icon aria-hidden="true" className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.2} />
      </div>
      <p className="text-2xl font-bold leading-none text-accent [text-shadow:0_1px_2px_rgb(0_0_0_/_0.08)] sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary [text-shadow:0_1px_2px_rgb(255_255_255_/_0.28)] sm:text-sm">
        {label}
      </p>
    </div>
  );
}
