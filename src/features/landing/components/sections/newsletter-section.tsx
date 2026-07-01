import { SectionHeader } from "@/features/landing/components/ui/section-header";
import { layoutStyles, sectionStyles } from "@/features/landing/constants/styles";

const inputClass =
  "h-12 rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-text-secondary hover:border-primary focus:border-primary focus:ring-4 focus:ring-primary-light";

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
        <form
          className="flex flex-col gap-4 rounded-2xl border border-surface/12 bg-surface/8 p-5 shadow-elevated backdrop-blur sm:p-6 lg:flex-row lg:items-end"
          action="#"
          method="post"
        >
          <label className="grid gap-2 text-sm font-medium text-surface-alt lg:flex-1">
            Họ và tên
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Nguyễn An"
              className={inputClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-surface-alt lg:flex-1">
            Email
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="an@example.com"
              className={inputClass}
            />
          </label>
          <button
            type="submit"
            className="h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold whitespace-nowrap text-surface shadow-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:translate-y-0 lg:w-40 lg:flex-none"
          >
            Gửi đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
