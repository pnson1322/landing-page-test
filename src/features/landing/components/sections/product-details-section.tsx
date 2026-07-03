import { SkeletonImage } from "@/features/landing/components/motion/skeleton-image";
import { ProductDetailCard } from "@/features/landing/components/sections/product-detail-card";
import { ProductMetricCard } from "@/features/landing/components/sections/product-metric-card";
import { SectionHeader } from "@/features/landing/components/ui/section-header";
import { productMetrics } from "@/features/landing/constants/product-details";
import { layoutStyles, sectionStyles } from "@/features/landing/constants/styles";
import { productDetails } from "@/features/landing/data";

export function ProductDetailsSection() {
  return (
    <section id="details" className={sectionStyles.soft}>
      <div className={layoutStyles.container}>
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <div className="relative min-h-[560px] overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated lg:h-full">
            <SkeletonImage
              src="/aurahub-angle.webp"
              alt="AuraHub nhìn từ góc nghiêng trong studio"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-x-3 bottom-7 rounded-2xl border border-white/45 bg-surface/74 p-3 shadow-[0_26px_76px_rgb(28_35_33_/_0.28)] backdrop-blur-3xl sm:inset-x-5 sm:bottom-10 sm:p-4">
              <p className="mb-3 inline-flex w-fit rounded-full bg-primary-light/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-card">
                Hardware profile
              </p>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {productMetrics.map((metric, index) => (
                  <ProductMetricCard
                    key={metric.label}
                    delayMs={index * 70}
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-8 lg:p-10">
            <SectionHeader
              eyebrow="Xem chi tiết sản phẩm"
              title="Một thiết bị nhỏ để đọc rõ chất lượng không gian sống."
              body="AuraHub gom dữ liệu phòng ở theo ngữ cảnh, giúp bạn hiểu khi nào không khí bí, khi nào phòng quá ồn và điều gì đang ảnh hưởng tới chất lượng nghỉ ngơi."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {productDetails.map((detail, index) => (
                <ProductDetailCard
                  key={detail.title}
                  delayMs={index * 70}
                  detail={detail}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
