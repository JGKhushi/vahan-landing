"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const year = 2026; // fixed to keep server/client render identical

  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div className="text-sm">
              <p className="font-semibold text-gov-navy">{t("portalName")}</p>
              <p className="text-xs text-gray-500">{t("poweredBy")}</p>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 sm:text-right">
            <p>{t("buildVersion")}: 072020261700</p>
            <p>{t("bestViewed")}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4 text-center text-xs text-gray-500">
          <p>© {year} {t("copyright")}</p>
          <p className="mt-1 text-gray-400">{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
