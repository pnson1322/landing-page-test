import type { ReactNode } from "react";

import { focusStyles } from "@/features/landing/constants/styles";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

const buttonVariants = {
  primary:
    "bg-primary text-surface shadow-primary hover:bg-primary-dark",
  secondary:
    "border border-border bg-surface text-text-primary shadow-card hover:bg-primary-light",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${focusStyles} ${buttonVariants[variant]}`}
    >
      {children}
    </a>
  );
}
