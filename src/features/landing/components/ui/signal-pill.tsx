import { focusStyles } from "@/features/landing/constants/styles";

type SignalPillProps = {
  children: string;
};

export function SignalPill({ children }: SignalPillProps) {
  return (
    <span
      className={`rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-text-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary hover:shadow-card ${focusStyles}`}
    >
      {children}
    </span>
  );
}
