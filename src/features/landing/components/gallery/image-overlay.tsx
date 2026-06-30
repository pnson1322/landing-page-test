type ImageOverlayProps = {
  counter: string;
  description: string;
  title: string;
};

export function ImageOverlay({ counter, description, title }: ImageOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-x-3 bottom-3 max-h-[34%] overflow-hidden rounded-lg border border-white/30 bg-[linear-gradient(135deg,rgba(255,250,240,0.5)_0%,rgba(255,255,255,0.28)_100%)] p-3.5 shadow-[0_18px_62px_rgba(23,33,43,0.11)] backdrop-blur-[26px] sm:bottom-5 sm:left-5 sm:right-auto sm:w-[min(560px,calc(100%-2.5rem))] sm:p-4">
      <p className="inline-flex h-7 w-fit items-center rounded-md bg-white/36 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d5f63] shadow-[0_8px_18px_rgba(20,122,126,0.07)]">
        {counter}
      </p>
      <h3 className="mt-2.5 text-[21px] font-semibold leading-tight text-[#17212b] sm:text-[24px]">
        {title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-[#41515d]">
        {description}
      </p>
    </div>
  );
}
