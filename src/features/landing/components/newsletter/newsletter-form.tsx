"use client";

import { useNewsletterForm } from "@/features/landing/hooks/use-newsletter-form";

const inputClass =
  "h-12 rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-text-secondary hover:border-primary focus:border-primary focus:ring-4 focus:ring-primary-light";

const errorClass = "min-h-5 text-xs font-medium leading-5 text-red-300";

export function NewsletterForm() {
  const { errors, isSubmitting, onSubmit, register } = useNewsletterForm();

  return (
    <>
      <form
        className="flex flex-col gap-4 rounded-2xl border border-surface/12 bg-surface/8 p-5 shadow-elevated backdrop-blur sm:p-6 lg:flex-row lg:items-start"
        onSubmit={onSubmit}
        noValidate
      >
        <label className="grid gap-2 text-sm font-medium text-surface-alt lg:flex-1">
          Họ và tên
          <input
            {...register("name")}
            aria-describedby="newsletter-name-error"
            aria-invalid={errors.name ? "true" : "false"}
            autoComplete="name"
            className={inputClass}
            defaultValue=""
            placeholder="Nguyễn An"
            type="text"
          />
          <span id="newsletter-name-error" className={errorClass}>
            {errors.name?.message}
          </span>
        </label>
        <label className="grid gap-2 text-sm font-medium text-surface-alt lg:flex-1">
          Email
          <input
            {...register("email")}
            aria-describedby="newsletter-email-error"
            aria-invalid={errors.email ? "true" : "false"}
            autoComplete="email"
            className={inputClass}
            defaultValue=""
            placeholder="an@example.com"
            type="email"
          />
          <span id="newsletter-email-error" className={errorClass}>
            {errors.email?.message}
          </span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold whitespace-nowrap text-surface shadow-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0 lg:mt-7 lg:w-40 lg:flex-none"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-surface/45 border-t-surface" />
              Đang gửi...
            </span>
          ) : (
            "Gửi đăng ký"
          )}
        </button>
      </form>
    </>
  );
}
