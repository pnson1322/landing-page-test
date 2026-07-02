import { NewsletterForm } from "@/features/landing/components/newsletter/newsletter-form";
import { SectionHeader } from "@/features/landing/components/ui/section-header";
import { layoutStyles, sectionStyles } from "@/features/landing/constants/styles";

export function NewsletterSection() {
  return (
    <section id="newsletter" className={sectionStyles.dark}>
      <div
        className={`${layoutStyles.container} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}
      >
        <SectionHeader
          inverse
          eyebrow="Nhận tin ra mắt"
          title="Nhận thông báo khi AuraHub mở đặt trước."
          body="Để lại email, chúng tôi sẽ gửi thông tin sản phẩm, bảng giá và lịch mở bán sớm nhất."
        />
        <NewsletterForm />
      </div>
    </section>
  );
}
