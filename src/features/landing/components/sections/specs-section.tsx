import { SpecRow } from "@/features/landing/components/sections/spec-row";
import { specs } from "@/features/landing/data";

export function SpecsSection() {
  return (
    <section id="specs" className="bg-[#edf4f2] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#147a7e]">
            ThĂ´ng sá»‘ ká»¹ thuáº­t
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
            Gá»n gĂ ng trĂªn bĂ n, Ä‘á»§ sĂ¢u cho dá»¯ liá»‡u mĂ´i trÆ°á»ng.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#53616b]">
            AuraHub Ä‘Æ°á»£c thiáº¿t káº¿ cho phĂ²ng ngá»§, phĂ²ng lĂ m viá»‡c vĂ  cÄƒn há»™ nhá»,
            Æ°u tiĂªn váº­n hĂ nh Ăªm, tiĂªu thá»¥ Ä‘iá»‡n tháº¥p vĂ  kháº£ nÄƒng Ä‘á»“ng bá»™ dá»¯ liá»‡u
            á»•n Ä‘á»‹nh.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#cbd8d4] bg-white">
          <dl className="divide-y divide-[#e2ded5]">
            {specs.map((spec) => (
              <SpecRow key={spec.label} spec={spec} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
