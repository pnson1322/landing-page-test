type ImageOverlayProps = {
  counter: string;
  description: string;
  title: string;
};

export function ImageOverlay({ counter, description, title }: ImageOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex min-h-[46%] items-end bg-gradient-to-t from-black/75 via-black/42 to-transparent p-4 sm:min-h-[44%] sm:p-6 lg:p-8">
      <div className="max-w-2xl">
        <p className="inline-flex h-7 w-fit items-center rounded-full bg-surface/16 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white ring-1 ring-white/24 backdrop-blur-md">
          {counter}
        </p>
        <h3 className="mt-2.5 text-[22px] font-semibold leading-tight text-white drop-shadow-sm sm:text-[28px]">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/88 drop-shadow-sm sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}
