"use client";

import { GallerySectionHeader } from "@/features/landing/components/gallery/gallery-section-header";
import { ImageModal } from "@/features/landing/components/gallery/image-modal";
import { ProductGalleryHero } from "@/features/landing/components/gallery/product-gallery-hero";
import { ProductGalleryList } from "@/features/landing/components/gallery/product-gallery-list";
import { useProductGallery } from "@/features/landing/hooks/use-product-gallery";

export function ProductGallerySection() {
  const gallery = useProductGallery();

  return (
    <section
      id="gallery"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff7ec_58%,#edf4f2_100%)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-7">
        <GallerySectionHeader />
        <div className="mt-10 grid gap-4 lg:h-[560px] lg:grid-cols-[minmax(0,1.72fr)_minmax(340px,0.9fr)] xl:h-[620px] xl:gap-6">
          <ProductGalleryHero
            image={gallery.activeImage}
            counter={gallery.imageCounter}
            onOpen={gallery.openModal}
            onPrevious={gallery.showPrevious}
            onNext={gallery.showNext}
          />
          <ProductGalleryList items={gallery.galleryItems} />
        </div>
      </div>
      <ImageModal
        image={gallery.activeImage}
        modal={gallery.modal}
        onClose={gallery.closeModal}
        onContentClick={gallery.stopModalContentClick}
        onPrevious={gallery.showPrevious}
        onNext={gallery.showNext}
      />
    </section>
  );
}
