"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

// Three preset scales. Because Tailwind sizes are in `rem`, changing the root
// font-size scales ALL text on the page proportionally.
const SCALES = [0.9, 1, 1.1]; // small, normal, large
const STORAGE_KEY = "vahan-text-scale";

export function TextSizeControls() {
  const { t } = useLanguage();
  const [scale, setScale] = useState(1); // 1 = normal (index 1)

  // Restore the saved scale on first load.
  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (SCALES.includes(saved)) setScale(saved);
  }, []);

  // Apply the scale to the document root + remember it.
  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", String(scale));
    localStorage.setItem(STORAGE_KEY, String(scale));
  }, [scale]);

  // Buttons: decrease, reset, increase.
  const dec = () => setScale((s) => SCALES[Math.max(0, SCALES.indexOf(s) - 1)]);
  const reset = () => setScale(1);
  const inc = () => setScale((s) => SCALES[Math.min(SCALES.length - 1, SCALES.indexOf(s) + 1)]);

  const btn =
    "flex h-6 w-6 items-center justify-center rounded border border-white/40 bg-white/10 text-white hover:bg-white/20";

  return (
    <div className="flex items-center gap-1" aria-label={t("textSize")}>
      <button type="button" onClick={dec} className={btn} aria-label="Decrease text size">
        <span className="text-xs">A-</span>
      </button>
      <button type="button" onClick={reset} className={btn} aria-label="Reset text size">
        <span className="text-sm">A</span>
      </button>
      <button type="button" onClick={inc} className={btn} aria-label="Increase text size">
        <span className="text-base">A+</span>
      </button>
    </div>
  );
}
