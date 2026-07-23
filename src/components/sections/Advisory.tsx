"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

// Yellow security-advisory banner.
export function Advisory() {
  const { t } = useLanguage();
  return (
    <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4">
      <div className="flex gap-3">
        <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" fill="currentColor" aria-hidden="true">
          <path d="M12 2L1 21h22L12 2zm0 6l7 12H5l7-12zm-1 4v3h2v-3h-2zm0 4v2h2v-2h-2z" />
        </svg>
        <div>
          <p className="text-sm font-bold text-amber-800">{t("advisoryTitle")}</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-900/80">{t("advisoryBody")}</p>
        </div>
      </div>
    </div>
  );
}
