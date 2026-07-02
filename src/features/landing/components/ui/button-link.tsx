"use client";

import type { ReactNode } from "react";

import { useLandingTracking } from "@/features/landing/components/tracking/landing-tracking-provider";
import { focusStyles } from "@/features/landing/constants/styles";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  trackingLabel?: string;
  trackingNotice?: string;
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
  trackingLabel,
  trackingNotice,
  variant = "primary",
}: ButtonLinkProps) {
  const { trackEvent } = useLandingTracking();

  function handleClick() {
    if (!trackingLabel) {
      return;
    }

    trackEvent(
      {
        type: "cta_click",
        label: trackingLabel,
        metadata: { href },
      },
      { notice: trackingNotice },
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${focusStyles} ${buttonVariants[variant]}`}
    >
      {children}
    </a>
  );
}
