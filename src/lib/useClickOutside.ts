"use client";

import { useEffect, type RefObject } from "react";

// Reusable behaviour: call `handler` whenever the user clicks/taps OUTSIDE `ref`.
// Every dropdown uses this so it closes when you click elsewhere on the page.
export function useClickOutside(
  ref: RefObject<HTMLElement | null>, // the element we consider "inside"
  handler: () => void, // what to do on an outside click (usually: close)
  enabled = true, // only listen while the dropdown is open (perf)
) {
  useEffect(() => {
    if (!enabled) return; // do nothing when closed

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      // If we have an element and the click target is NOT inside it -> outside click.
      if (el && !el.contains(event.target as Node)) {
        handler();
      }
    }

    // Also close on Escape key — expected keyboard behaviour for menus.
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handler();
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    // Cleanup: remove listeners when the dropdown closes / component unmounts.
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ref, handler, enabled]);
}
