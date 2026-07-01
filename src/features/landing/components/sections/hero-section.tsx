import { ButtonLink } from "@/features/landing/components/ui/button-link";
import { siteConfig } from "@/features/landing/constants/site";
import { layoutStyles } from "@/features/landing/constants/styles";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background pt-24 sm:pt-28"
      aria-label="AuraHub"
    >
      <div
        className="absolute inset-0 bg-cover bg-[position:62%_center]"
        style={{ backgroundImage: `url(${siteConfig.heroImage.src})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/76 to-background/10 lg:via-background/68 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-2/5 bg-[radial-gradient(circle_at_20%_50%,var(--primary-light),transparent_64%)] opacity-45 blur-3xl"
        aria-hidden="true"
      />

      <div className={`${layoutStyles.container} relative py-20 sm:py-24 lg:py-28`}>
        <div className="max-w-2xl">
          <p className="inline-flex w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Smart wellness monitor
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal text-text-primary sm:text-6xl lg:text-7xl">
            AuraHub
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary sm:text-xl">
            Thiết bị thông minh theo dõi không khí, tiếng ồn, ánh sáng và giấc
            ngủ, giúp không gian sống sạch hơn và dễ nghỉ ngơi hơn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#newsletter">Đăng ký nhận tin</ButtonLink>
            <ButtonLink href="#details" variant="secondary">
              Xem chi tiết
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
