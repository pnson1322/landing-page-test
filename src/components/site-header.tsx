import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        aria-label="Điều hướng chính"
      >
        <a className="text-lg font-semibold tracking-normal text-[#17212b]" href="#">
          {siteConfig.name}
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-[#40515d] sm:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
