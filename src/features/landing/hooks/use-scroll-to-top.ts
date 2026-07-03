"use client";

import { useEffect, useState } from "react";

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    function updateVisibility() {
      const documentElement = document.documentElement;
      const scrollableHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setIsVisible(scrollProgress > 0.5);
    }

    function handleScroll() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateVisibility();
      });
    }

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  return { isVisible, scrollToTop };
}
