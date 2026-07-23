"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { STATES, TOTAL_SERVICES } from "@/data/states";

// "Services across India" — summary tiles + a per-state grid (stand-in for the map).
export function StatsSection() {
  const { t } = useLanguage();
  const max = Math.max(...STATES.map((s) => s.services));

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-bold text-gov-navy">{t("statsTitle")}</h2>
      <p className="mt-1 text-sm text-gray-500">{t("statsSubtitle")}</p>

      {/* Summary tiles */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gov-sky p-4 text-center">
          <p className="text-3xl font-extrabold text-gov-navy">{STATES.length}</p>
          <p className="text-xs text-gray-600">{t("statesUts")}</p>
        </div>
        <div className="rounded-lg bg-gov-sky p-4 text-center">
          <p className="text-3xl font-extrabold text-gov-navy">{TOTAL_SERVICES}</p>
          <p className="text-xs text-gray-600">{t("totalServices")}</p>
        </div>
      </div>

      {/* Per-state bars */}
      <div className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {STATES.map((s) => (
          <div key={s.code} className="flex items-center gap-2 text-sm">
            <span className="w-28 shrink-0 truncate text-gray-700">{s.name}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
              <span
                className="block h-full rounded-full bg-gov-blue"
                style={{ width: `${(s.services / max) * 100}%` }}
              />
            </span>
            <span className="w-6 shrink-0 text-right text-xs font-medium text-gov-navy">
              {s.services}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
