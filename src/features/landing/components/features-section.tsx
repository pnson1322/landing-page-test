import { features } from "@/features/landing/data";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c46c35]">
            Tính năng nổi bật
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17212b] sm:text-4xl">
            Một trung tâm nhỏ cho chất lượng sống mỗi ngày.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[#e2ded5] bg-[#fbfaf7] p-6"
            >
              <div className="mb-6 h-1.5 w-12 rounded-sm bg-[#147a7e]" />
              <h3 className="text-lg font-semibold text-[#17212b]">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#53616b]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
