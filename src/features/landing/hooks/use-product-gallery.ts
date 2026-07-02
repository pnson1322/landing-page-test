"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { useLandingTracking } from "@/features/landing/components/tracking/landing-tracking-provider";
import { productImages } from "@/features/landing/data";
import type { ProductGalleryItem } from "@/features/landing/types/landing";

const MODAL_EXIT_DELAY = 180;

export function useProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const hasSyncedActiveItemRef = useRef(false);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { trackEvent } = useLandingTracking();

  const activeImage = productImages[activeIndex];
  const isModalVisible = isModalOpen || isModalClosing;
  const imageCount = productImages.length;
  const imageCounter = `${String(activeIndex + 1).padStart(2, "0")} / ${String(
    imageCount,
  ).padStart(2, "0")}`;

  const goToSlide = useCallback((index: number) => {
    const lastIndex = productImages.length - 1;

    if (index < 0) {
      setActiveIndex(lastIndex);
      return;
    }

    if (index > lastIndex) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index);
  }, []);

  const showPrevious = useCallback(() => {
    trackEvent(
      {
        type: "carousel_nav",
        label: "previous",
        metadata: { fromIndex: activeIndex },
      },
      { notice: "Đã ghi nhận chuyển ảnh" },
    );
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide, trackEvent]);

  const showNext = useCallback(() => {
    trackEvent(
      {
        type: "carousel_nav",
        label: "next",
        metadata: { fromIndex: activeIndex },
      },
      { notice: "Đã ghi nhận chuyển ảnh" },
    );
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide, trackEvent]);

  const openModal = useCallback(() => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setIsModalClosing(false);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (!isModalOpen || isModalClosing) {
      return;
    }

    setIsModalClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
      closeTimeoutRef.current = null;
    }, MODAL_EXIT_DELAY);
  }, [isModalClosing, isModalOpen]);

  const stopModalContentClick = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const registerGalleryItem = useCallback(
    (index: number) => (element: HTMLButtonElement | null) => {
      itemRefs.current[index] = element;
    },
    [],
  );

  const galleryItems: ProductGalleryItem[] = useMemo(
    () =>
      productImages.map((image, index) => ({
        image,
        isActive: activeIndex === index,
        onSelect: () => goToSlide(index),
      })),
    [activeIndex, goToSlide],
  );

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasSyncedActiveItemRef.current) {
      hasSyncedActiveItemRef.current = true;
      return;
    }

    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeIndex]);

  useEffect(() => {
    if (!isModalVisible) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, isModalVisible, showNext, showPrevious]);

  return {
    activeImage,
    galleryItems,
    imageCounter,
    modal: {
      isVisible: isModalVisible,
      isClosing: isModalClosing,
    },
    closeModal,
    openModal,
    registerGalleryItem,
    showNext,
    showPrevious,
    stopModalContentClick,
  };
}
