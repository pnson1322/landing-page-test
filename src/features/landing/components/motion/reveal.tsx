"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  as?: "article" | "div" | "span";
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

export function Reveal({
  as = "div",
  children,
  className = "",
  delayMs = 0,
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Component = as;
  const setRef = (element: HTMLElement | null) => {
    ref.current = element;
  };
  const style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -8% 0px", threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={setRef}
      style={style}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
