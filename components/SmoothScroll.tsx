"use client";

import { useEffect } from "react";

/**
 * Smooth, eased mouse-wheel scrolling (the "gliding" feel used on premium sites).
 * - Desktop mouse / trackpad only. Phones and tablets keep their native scrolling.
 * - Turned off for visitors who ask their device for reduced motion.
 * - Keyboard, scrollbar and anchor links keep working normally.
 * Lightweight: no library, ~1 KB.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return;

    const LERP = 0.1; // lower = smoother / longer glide
    let target = window.scrollY;
    let current = window.scrollY;
    let animating = false;
    let rafId = 0;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    // Let inner scroll areas (e.g. the mobile menu, dropdowns) scroll themselves.
    const canScrollInside = (el: Element | null, deltaY: number): boolean => {
      while (el && el !== document.body && el !== document.documentElement) {
        const style = getComputedStyle(el);
        const overflowY = style.overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const step = () => {
      current += (target - current) * LERP;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        animating = false;
      }
      window.scrollTo({ top: current, behavior: "instant" as ScrollBehavior });
      if (animating) rafId = requestAnimationFrame(step);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // pinch / zoom
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // horizontal swipe
      if (canScrollInside(e.target as Element, e.deltaY)) return;

      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      if (!animating) {
        current = window.scrollY;
        target = window.scrollY;
      }
      target = Math.max(0, Math.min(maxScroll(), target + delta));
      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(step);
      }
    };

    // Keep in sync when scrolling happens another way (keyboard, scrollbar, links).
    const onScroll = () => {
      if (!animating) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
