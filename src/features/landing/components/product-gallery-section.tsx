import Image from "next/image";

import { productImages } from "@/features/landing/data";

export function ProductGallerySection() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c46c35]">
              Hình ảnh nhiều góc độ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
              Nhìn rõ thiết kế, chất liệu và cách AuraHub hoạt động cùng app.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#53616b]">
            Bộ ảnh tập trung vào thân máy, chi tiết cảm biến và trải nghiệm xem
            dữ liệu trên điện thoại để người dùng hình dung sản phẩm cụ thể hơn.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {productImages.map((image) => (
            <article
              key={image.src}
              className="overflow-hidden rounded-lg border border-[#e2ded5] bg-[#fbfaf7]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#17212b]">
                  {image.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#53616b]">
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
