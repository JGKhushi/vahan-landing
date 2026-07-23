"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

// Faux QR block (pure CSS grid) so we don't ship an image dependency.
function FakeQR({ label }: { label: string }) {
  const cells = Array.from({ length: 49 }, (_, i) => (i * 7 + (i % 3)) % 2 === 0);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid grid-cols-7 gap-0.5 rounded-md bg-white p-2 shadow">
        {cells.map((on, i) => (
          <span key={i} className={`h-3 w-3 ${on ? "bg-gov-navy" : "bg-transparent"}`} />
        ))}
      </div>
      <span className="text-xs font-medium text-white/90">{label}</span>
    </div>
  );
}

export function MobileUpdate() {
  const { t } = useLanguage();
  return (
    <section className="rounded-xl bg-gradient-to-br from-gov-navy to-gov-blue p-6 text-white shadow-sm">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="max-w-md text-center sm:text-left">
          <h2 className="text-xl font-bold">{t("mobileTitle")}</h2>
          <p className="mt-2 text-sm text-white/80">{t("mobileBody")}</p>
        </div>
        <div className="flex gap-6">
          <FakeQR label={t("scanVahan")} />
          <FakeQR label={t("scanSarathi")} />
        </div>
      </div>
    </section>
  );
}
