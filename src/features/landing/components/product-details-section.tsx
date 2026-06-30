import Image from "next/image";

import { productDetails } from "@/features/landing/data";

const trackedSignals = ["PM2.5", "CO2", "VOC", "Nhiệt độ", "Độ ẩm"];

export function ProductDetailsSection() {
  return (
    <section id="details" className="bg-[#f7f5f0] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg border border-[#e2ded5] bg-white">
          <Image
            src="/aurahub-angle.webp"
            alt="AuraHub nhìn từ góc nghiêng trong studio"
            width={1200}
            height={799}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#147a7e]">
            Xem chi tiết sản phẩm
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
            Không chỉ đo không khí, AuraHub giúp hiểu điều kiện sống quanh bạn.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#53616b]">
            Thiết bị được thiết kế cho những không gian bạn ở lâu nhất: phòng
            ngủ, góc làm việc và phòng khách. Mỗi dữ liệu được gom lại theo ngữ
            cảnh để người dùng biết nên thay đổi điều gì trước.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {trackedSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-md border border-[#cbd8d4] bg-white px-3 py-2 text-sm font-semibold text-[#17212b]"
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {productDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-lg border border-[#e2ded5] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-[#17212b]">
                  {detail.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#53616b]">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
