import Image from "next/image";

import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[86svh] items-center">
      <Image
        src={siteConfig.heroImage.src}
        alt="Thiết bị AuraHub đặt trên bàn trong không gian sống hiện đại"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,245,240,0.96)_0%,rgba(247,245,240,0.82)_42%,rgba(247,245,240,0.18)_72%,rgba(247,245,240,0.04)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#147a7e]">
            Smart wellness monitor
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-[#17212b] sm:text-6xl lg:text-7xl">
            AuraHub
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#40515d] sm:text-xl">
            Thiết bị thông minh theo dõi không khí, tiếng ồn, ánh sáng và giấc
            ngủ, giúp không gian sống sạch hơn và dễ nghỉ ngơi hơn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#newsletter"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#147a7e] px-6 text-sm font-semibold text-white"
            >
              Đăng ký nhận tin
            </a>
            <a
              href="#specs"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#9db1ad] bg-white/70 px-6 text-sm font-semibold text-[#17212b]"
            >
              Xem thông số
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
