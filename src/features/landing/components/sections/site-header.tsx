import { siteConfig } from "@/features/landing/constants/site";
import { focusStyles } from "@/features/landing/constants/styles";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-surface/86 px-4 py-3 shadow-card backdrop-blur-2xl sm:px-5"
        aria-label="Điều hướng chính"
      >
        <a
          className={`rounded-full px-2 text-lg font-semibold tracking-normal text-text-primary transition duration-200 hover:-translate-y-0.5 hover:text-primary active:translate-y-0 active:text-primary-dark ${focusStyles}`}
          href="#"
        >
          {siteConfig.name}
        </a>
        <div className="hidden items-center gap-2 text-sm font-semibold text-text-secondary sm:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary active:translate-y-0 active:bg-primary active:text-surface ${focusStyles}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
