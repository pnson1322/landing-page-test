import { FeatureCard } from "@/features/landing/components/sections/feature-card";
import { SectionHeader } from "@/features/landing/components/ui/section-header";
import { layoutStyles, sectionStyles } from "@/features/landing/constants/styles";
import { features } from "@/features/landing/data";

export function FeaturesSection() {
  return (
    <section id="features" className={sectionStyles.surface}>
      <div className={layoutStyles.container}>
        <SectionHeader
          eyebrow="Tính năng nổi bật"
          title="Một trung tâm nhỏ cho chất lượng sống mỗi ngày."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              delayMs={index * 70}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
