export const layoutStyles = {
  container: "mx-auto max-w-7xl px-5 sm:px-8",
  wideContainer: "mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-7",
};

export const sectionStyles = {
  background: "bg-background py-20 sm:py-24",
  surface: "bg-surface py-20 sm:py-24",
  soft: "bg-surface-alt py-20 sm:py-24",
  dark: "bg-deep-surface py-20 text-deep-text sm:py-24",
};

export const textStyles = {
  eyebrow:
    "inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary",
  headline:
    "mt-3 text-3xl font-semibold leading-[1.12] tracking-normal text-text-primary sm:text-4xl",
  headlineLight:
    "mt-3 text-3xl font-semibold leading-[1.12] tracking-normal text-deep-text sm:text-4xl",
  body: "mt-5 text-base leading-7 text-text-secondary",
  bodyLight: "mt-5 text-base leading-7 text-deep-muted",
};

export const cardStyles = {
  base: "rounded-xl border border-border bg-surface shadow-card",
  hover:
    "transition duration-200 ease-out hover:-translate-y-1 hover:bg-surface hover:shadow-elevated",
  glass:
    "rounded-2xl border border-surface/60 bg-glass-surface shadow-elevated backdrop-blur-2xl",
};

export const focusStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
