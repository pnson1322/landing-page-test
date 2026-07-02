"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useLandingTracking } from "@/features/landing/components/tracking/landing-tracking-provider";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/features/landing/schemas/newsletter-schema";

const SUCCESS_MESSAGE = "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.";
const ERROR_MESSAGE = "Có lỗi xảy ra, vui lòng thử lại.";

export function useNewsletterForm() {
  const { showToast } = useLandingTracking();
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const payload = newsletterSchema.parse(values);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Subscribe request failed");
      }

      form.reset();
      showToast({ type: "success", message: SUCCESS_MESSAGE });
    } catch {
      showToast({ type: "error", message: ERROR_MESSAGE });
    }
  });

  return {
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
    register: form.register,
  };
}
