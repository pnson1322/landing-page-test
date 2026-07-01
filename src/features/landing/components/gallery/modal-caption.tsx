type ModalCaptionProps = {
  description: string;
  title: string;
};

export function ModalCaption({ description, title }: ModalCaptionProps) {
  return (
    <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-surface/40 bg-glass-surface p-4 shadow-elevated backdrop-blur-xl sm:left-1/2 sm:right-auto sm:w-[min(720px,calc(100%-2rem))] sm:-translate-x-1/2">
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </div>
  );
}
