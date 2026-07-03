import { SpecRow } from "@/features/landing/components/sections/spec-row";
import { SectionHeader } from "@/features/landing/components/ui/section-header";
import { layoutStyles, sectionStyles } from "@/features/landing/constants/styles";
import { specs } from "@/features/landing/data";

export function SpecsSection() {
  return (
    <section id="specs" className={sectionStyles.soft}>
      <div
        className={`${layoutStyles.container} grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start`}
      >
        <SectionHeader
          eyebrow="Thông số kỹ thuật"
          title="Gọn gàng trên bàn, đủ sâu cho dữ liệu môi trường."
          body="AuraHub được thiết kế cho phòng ngủ, phòng làm việc và căn hộ nhỏ, ưu tiên vận hành êm, tiêu thụ điện thấp và khả năng đồng bộ dữ liệu ổn định."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-card">
          <dl className="divide-y divide-border">
            {specs.map((spec, index) => (
              <SpecRow
                key={spec.label}
                delayMs={index * 60}
                spec={spec}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
