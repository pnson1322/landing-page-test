import { FeatureCard } from "@/features/landing/components/sections/feature-card";
import { features } from "@/features/landing/data";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c46c35]">
            TĂ­nh nÄƒng ná»•i báº­t
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
            Má»™t trung tĂ¢m nhá» cho cháº¥t lÆ°á»£ng sá»‘ng má»—i ngĂ y.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
