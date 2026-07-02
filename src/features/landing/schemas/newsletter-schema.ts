import { z } from "zod";

const namePattern = /^[\p{L}\p{M} .'-]+$/u;

export const newsletterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập họ và tên.")
    .min(2, "Họ và tên cần tối thiểu 2 ký tự.")
    .refine((value) => namePattern.test(value) && /\p{L}/u.test(value), {
      message: "Họ và tên không được toàn số hoặc ký tự đặc biệt.",
    }),
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email.")
    .email("Email chưa đúng định dạng."),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
