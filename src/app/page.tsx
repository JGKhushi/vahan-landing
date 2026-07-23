"use client"; // uses the language context (browser-side state), so it's a client component

import { useLanguage } from "@/i18n/LanguageProvider";
import { LOCALES, type Locale } from "@/i18n/config";

// Temporary demo page for Commit 2: proves multilingual text + dynamic fonts work.
// It will be replaced by the real header/content in the next commits.
export default function HomePage() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 p-8 text-center">
      {/* Language switcher — a native <select> dropdown */}
      <label className="flex items-center gap-2 text-sm text-gray-700">
        {t("selectLanguage")}:
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="rounded-md border border-gov-navy px-3 py-1.5 font-app"
        >
          {LOCALES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.native}
            </option>
          ))}
        </select>
      </label>

      {/* These strings re-render in the chosen language AND font */}
      <h1 className="text-3xl font-bold text-gov-navy sm:text-4xl">
        {t("portalName")} — {t("portalTagline")}
      </h1>
      <p className="text-lg text-gray-700">{t("govOfIndia")}</p>
      <p className="max-w-md text-gray-600">{t("advisoryBody")}</p>
      <button className="rounded-md bg-gov-navy px-6 py-2 font-semibold text-white">
        {t("proceed")}
      </button>

      <span className="rounded-full bg-gov-green px-4 py-1 text-sm text-white">
        Commit 2 ✓ Multilingual + dynamic fonts working
      </span>
    </main>
  );
}
