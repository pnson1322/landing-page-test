import { specs } from "@/features/landing/data";

export function SpecsSection() {
  return (
    <section id="specs" className="bg-[#edf4f2] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#147a7e]">
            Thông số kỹ thuật
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
            Gọn gàng trên bàn, đủ sâu cho dữ liệu môi trường.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#53616b]">
            AuraHub được thiết kế cho phòng ngủ, phòng làm việc và căn hộ nhỏ,
            ưu tiên vận hành êm, tiêu thụ điện thấp và khả năng đồng bộ dữ liệu
            ổn định.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#cbd8d4] bg-white">
          <dl className="divide-y divide-[#e2ded5]">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid gap-2 px-5 py-5 sm:grid-cols-[160px_1fr] sm:px-6"
              >
                <dt className="text-sm font-semibold text-[#17212b]">
                  {spec.label}
                </dt>
                <dd className="text-sm leading-6 text-[#53616b]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
