import type { LandingFeature } from "@/features/landing/types/landing";

type FeatureCardProps = {
  feature: LandingFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group rounded-lg border border-[#e2ded5] bg-[#fbfaf7] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#b9cbc7] hover:bg-white hover:shadow-[0_18px_45px_rgba(23,33,43,0.08)]">
      <div className="mb-6 h-1.5 w-12 rounded-sm bg-[#147a7e] transition-all duration-200 group-hover:w-16 group-hover:bg-[#c46c35]" />
      <h3 className="text-lg font-semibold text-[#17212b]">
        {feature.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-[#53616b]">
        {feature.description}
      </p>
    </article>
  );
}
