import { FeaturesSection } from "@/features/landing/components/sections/features-section";
import { HeroSection } from "@/features/landing/components/sections/hero-section";
import { NewsletterSection } from "@/features/landing/components/sections/newsletter-section";
import { ProductDetailsSection } from "@/features/landing/components/sections/product-details-section";
import { ProductGallerySection } from "@/features/landing/components/sections/product-gallery-section";
import { SiteFooter } from "@/features/landing/components/sections/site-footer";
import { SiteHeader } from "@/features/landing/components/sections/site-header";
import { SpecsSection } from "@/features/landing/components/sections/specs-section";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-text-primary">
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
