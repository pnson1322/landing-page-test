import { AlertTriangle, Check, Info, MousePointerClick } from "lucide-react";

export type TrackingToastType = "error" | "info" | "success";

export type TrackingToast = {
  durationMs: number;
  id: number;
  message: string;
  type: TrackingToastType;
};

type TrackingToastListProps = {
  toasts: TrackingToast[];
};

const toastStyles = {
  error: {
    bar: "bg-[#EF4444]",
    icon: AlertTriangle,
    iconClass: "bg-red-500/10 text-red-600",
    progress: "bg-red-500/80",
  },
  info: {
    bar: "bg-primary/60",
    icon: Info,
    iconClass: "bg-primary/10 text-primary",
    progress: "bg-primary/80",
  },
  success: {
    bar: "bg-primary",
    icon: Check,
    iconClass: "bg-primary/10 text-primary",
    progress: "bg-primary/80",
  },
};

export function TrackingToastList({ toasts }: TrackingToastListProps) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-3 top-4 z-50 flex flex-col gap-3 sm:left-auto sm:right-6 sm:top-24 sm:w-full sm:max-w-[360px] lg:max-w-[420px]">
      {toasts.map((toast) => (
        <TrackingToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function TrackingToastItem({ toast }: { toast: TrackingToast }) {
  const config = toastStyles[toast.type];
  const Icon = toast.message.includes("click") ? MousePointerClick : config.icon;

  return (
    <div
      className="landing-toast pointer-events-auto relative flex min-w-72 items-center gap-3 overflow-hidden rounded-xl bg-surface py-3.5 pl-0 pr-5 text-text-primary shadow-lg sm:min-w-80"
      style={{ animationDuration: `${toast.durationMs}ms` }}
    >
      <span className={`self-stretch rounded-l-xl ${config.bar} w-[3px]`} aria-hidden="true" />
      <span
        className={`grid h-9 w-9 flex-none place-items-center rounded-full ${config.iconClass}`}
      >
        <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.3} />
      </span>
      <p className="text-base font-medium leading-6">{toast.message}</p>
      <span
        className={`landing-toast-progress absolute bottom-0 left-0 h-[3px] rounded-b-xl ${config.progress}`}
        style={{ animationDuration: `${toast.durationMs}ms` }}
        aria-hidden="true"
      />
    </div>
  );
}
