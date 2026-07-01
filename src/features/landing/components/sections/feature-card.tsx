import { cardStyles } from "@/features/landing/constants/styles";
import type { LandingFeature } from "@/features/landing/types/landing";

type FeatureCardProps = {
  feature: LandingFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className={`group p-6 ${cardStyles.base} ${cardStyles.hover}`}>
      <div className="mb-6 h-1.5 w-12 rounded-full bg-primary transition-all duration-200 group-hover:w-16 group-hover:bg-accent" />
      <h3 className="text-lg font-semibold text-text-primary">
        {feature.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-text-secondary">
        {feature.description}
      </p>
    </article>
  );
}
