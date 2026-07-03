"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { focusStyles } from "@/features/landing/constants/styles";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsHydrated() {
  return useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isDark = isHydrated && resolvedTheme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  const label = isHydrated
    ? isDark
      ? "Switch to light theme"
      : "Switch to dark theme"
    : "Toggle theme";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-surface text-text-primary shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary active:translate-y-0 active:scale-[0.98] ${focusStyles}`}
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition duration-300 ${
          isDark
            ? "rotate-90 scale-75 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        strokeWidth={2.2}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition duration-300 ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-75 opacity-0"
        }`}
        strokeWidth={2.2}
      />
    </button>
  );
}
