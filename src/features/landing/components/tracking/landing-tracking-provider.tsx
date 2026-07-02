"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

import {
  TrackingToastList,
  type TrackingToast,
  type TrackingToastType,
} from "@/features/landing/components/tracking/tracking-toast-list";
import type { TrackingEventPayload } from "@/features/landing/schemas/tracking-schema";

type TrackEventOptions = {
  notice?: string;
};

type ShowToastInput = {
  message: string;
  type: TrackingToastType;
};

type TrackEventInput = Omit<TrackingEventPayload, "timestamp">;

type LandingTrackingContextValue = {
  showToast: (toast: ShowToastInput) => void;
  trackEvent: (event: TrackEventInput, options?: TrackEventOptions) => void;
};

const MILESTONES = [25, 50, 75, 100];
const SCROLL_THROTTLE_MS = 180;
const INFO_TOAST_DURATION_MS = 2200;
const STATUS_TOAST_DURATION_MS = 4000;
const LandingTrackingContext =
  createContext<LandingTrackingContextValue | null>(null);

export function LandingTrackingProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<TrackingToast[]>([]);
  const toastIdRef = useRef(0);
  const trackedMilestonesRef = useRef(new Set<number>());

  const showToast = useCallback((toast: ShowToastInput) => {
    const id = toastIdRef.current + 1;
    const durationMs =
      toast.type === "info" ? INFO_TOAST_DURATION_MS : STATUS_TOAST_DURATION_MS;
    toastIdRef.current = id;

    setToasts((currentToasts) => [
      ...currentToasts,
      { ...toast, durationMs, id },
    ]);
    window.setTimeout(() => {
      setToasts((currentToasts) =>
        currentToasts.filter((currentToast) => currentToast.id !== id),
      );
    }, durationMs);
  }, []);

  const trackEvent = useCallback(
    (event: TrackEventInput, options?: TrackEventOptions) => {
      const payload: TrackingEventPayload = {
        ...event,
        timestamp: new Date().toISOString(),
      };
      const body = JSON.stringify(payload);

      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/track",
          new Blob([body], { type: "application/json" }),
        );
      } else {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => undefined);
      }

      if (options?.notice) {
        showToast({ message: options.notice, type: "info" });
      }
    },
    [showToast],
  );

  useEffect(() => {
    let lastRun = 0;
    let trailingTimeout: number | null = null;

    function getScrollPercent() {
      const page = document.documentElement;
      const scrollTop = window.scrollY || page.scrollTop || document.body.scrollTop;
      const scrollableHeight = page.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return 100;
      }

      return Math.min(100, Math.floor((scrollTop / scrollableHeight) * 100));
    }

    function checkMilestones() {
      const percent = getScrollPercent();

      MILESTONES.forEach((milestone) => {
        if (percent < milestone || trackedMilestonesRef.current.has(milestone)) {
          return;
        }

        trackedMilestonesRef.current.add(milestone);
        trackEvent(
          {
            type: "scroll_milestone",
            label: `${milestone}%`,
            metadata: { percent: milestone },
          },
          { notice: `Đã ghi nhận bạn xem đến ${milestone}% trang` },
        );
      });
    }

    function handleScroll() {
      const now = window.performance.now();
      const remaining = SCROLL_THROTTLE_MS - (now - lastRun);

      if (remaining <= 0) {
        lastRun = now;
        checkMilestones();
        return;
      }

      if (trailingTimeout) {
        return;
      }

      trailingTimeout = window.setTimeout(() => {
        lastRun = window.performance.now();
        trailingTimeout = null;
        checkMilestones();
      }, remaining);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkMilestones();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (trailingTimeout) {
        window.clearTimeout(trailingTimeout);
      }
    };
  }, [trackEvent]);

  return (
    <LandingTrackingContext.Provider value={{ showToast, trackEvent }}>
      {children}
      <TrackingToastList toasts={toasts} />
    </LandingTrackingContext.Provider>
  );
}

export function useLandingTracking() {
  const context = useContext(LandingTrackingContext);

  if (!context) {
    throw new Error("useLandingTracking must be used inside LandingTrackingProvider");
  }

  return context;
}
