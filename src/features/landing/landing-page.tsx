import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection } from "@/features/landing/components/features-section";
import { HeroSection } from "@/features/landing/components/hero-section";
import { NewsletterSection } from "@/features/landing/components/newsletter-section";
import { ProductDetailsSection } from "@/features/landing/components/product-details-section";
import { ProductGallerySection } from "@/features/landing/components/product-gallery-section";
import { SpecsSection } from "@/features/landing/components/specs-section";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#17212b]">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <ProductDetailsSection />
      <ProductGallerySection />
      <SpecsSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
