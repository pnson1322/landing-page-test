import { siteConfig } from "@/features/landing/constants/site";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/55 bg-[#f7f5f0]/82 px-4 py-3 shadow-[0_18px_60px_rgba(23,33,43,0.14)] backdrop-blur-xl sm:px-5"
        aria-label="Äiá»u hÆ°á»›ng chĂ­nh"
      >
        <a
          className="rounded-md text-lg font-semibold tracking-normal text-[#17212b] transition duration-200 hover:-translate-y-0.5 hover:text-[#147a7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147a7e] active:translate-y-0 active:text-[#0d5f63]"
          href="#"
        >
          {siteConfig.name}
        </a>
        <div className="hidden items-center gap-2 text-sm font-semibold text-[#40515d] sm:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:bg-[#17212b] hover:text-white hover:shadow-[0_12px_24px_rgba(23,33,43,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147a7e] active:translate-y-0 active:bg-[#0d5f63]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
