"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TextSizeControls } from "./TextSizeControls";

// The thin navy bar across the very top: country/ministry on the left,
// accessibility (text size) + language switcher on the right.
export function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-gov-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-3 py-1.5 sm:px-6">
        {/* Left: Government of India / Ministry */}
        <div className="flex items-center gap-2 text-[11px] leading-tight sm:text-xs">
          <span className="font-semibold">{t("govOfIndia")}</span>
          <span className="hidden text-white/50 sm:inline">|</span>
          <span className="hidden text-white/80 sm:inline">{t("ministry")}</span>
        </div>

        {/* Right: text-size controls + language switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Text-size controls are hidden on the smallest screens to save space */}
          <div className="hidden xs:flex sm:flex">
            <TextSizeControls />
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
