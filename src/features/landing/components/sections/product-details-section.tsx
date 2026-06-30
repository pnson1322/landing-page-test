import Image from "next/image";

import { ProductDetailCard } from "@/features/landing/components/sections/product-detail-card";
import { ProductMetricCard } from "@/features/landing/components/sections/product-metric-card";
import {
  productMetrics,
  trackedSignals,
} from "@/features/landing/constants/product-details";
import { productDetails } from "@/features/landing/data";

export function ProductDetailsSection() {
  return (
    <section
      id="details"
      className="bg-[linear-gradient(135deg,#17212b_0%,#17212b_38%,#0d5f63_100%)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-[#d8d2c7] bg-[#17212b] shadow-[0_24px_70px_rgba(23,33,43,0.14)]">
            <Image
              src="/aurahub-angle.webp"
              alt="AuraHub nhìn từ góc nghiêng trong studio"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover opacity-95 transition duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,33,43,0)_46%,rgba(23,33,43,0.72)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ddbd7]">
                Hardware profile
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {productMetrics.map((metric) => (
                  <ProductMetricCard
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/14 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c46c35]">
              Xem chi tiết sản phẩm
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
              Một thiết bị nhỏ để đọc rõ chất lượng không gian sống.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#53616b]">
              AuraHub gom dữ liệu phòng ở theo ngữ cảnh, giúp bạn hiểu khi nào
              không khí bí, khi nào phòng quá ồn và điều gì đang ảnh hưởng tới
              chất lượng nghỉ ngơi.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {trackedSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-md border border-[#cbd8d4] bg-[#f7f5f0] px-3 py-2 text-sm font-semibold text-[#17212b] transition duration-200 hover:-translate-y-1 hover:border-[#147a7e] hover:bg-[#17212b] hover:text-white hover:shadow-[0_12px_26px_rgba(23,33,43,0.14)]"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {productDetails.map((detail, index) => (
                <ProductDetailCard
                  key={detail.title}
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
