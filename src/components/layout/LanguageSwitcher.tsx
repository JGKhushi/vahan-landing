"use client";

import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { LOCALES, getLocaleMeta } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

// Globe icon for the trigger.
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const current = getLocaleMeta(locale); // metadata for the active language

  return (
    <Dropdown
      align="right"
      ariaLabel={t("selectLanguage")}
      buttonClassName="rounded-md border border-white/40 bg-white/10 px-2.5 py-1 text-xs font-medium text-white hover:bg-white/20 sm:text-sm"
      // Trigger shows a globe + the current language in its own script
      label={
        <span className="flex items-center gap-1.5">
          <GlobeIcon />
          <span className="font-app">{current.native}</span>
        </span>
      }
    >
      {/* One row per language, each rendered in ITS OWN font for a live preview */}
      {LOCALES.map((l) => (
        <DropdownItem
          key={l.code}
          active={l.code === locale}
          onClick={() => setLocale(l.code)}
        >
          {/* inline style points this row at that language's font variable */}
          <span style={{ fontFamily: l.fontVar }} className="flex items-baseline justify-between gap-3">
            <span>{l.native}</span>
            <span className="text-xs text-gray-400">{l.english}</span>
          </span>
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
