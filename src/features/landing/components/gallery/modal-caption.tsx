type ModalCaptionProps = {
  description: string;
  title: string;
};

export function ModalCaption({ description, title }: ModalCaptionProps) {
  return (
    <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-lg border border-white/38 bg-white/68 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:left-1/2 sm:right-auto sm:w-[min(720px,calc(100%-2rem))] sm:-translate-x-1/2">
      <h3 className="text-xl font-semibold text-[#17212b]">{title}</h3>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#41515d]">
        {description}
      </p>
    </div>
  );
}
