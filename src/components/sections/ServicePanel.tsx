"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { STATES } from "@/data/states";

type Tab = "reg" | "authority";

// The central interactive card: pick a mode, fill dependent dropdowns, consent, proceed.
export function ServicePanel() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("reg");

  // Form state
  const [regNo, setRegNo] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [rto, setRto] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState("");

  // DEPENDENT DROPDOWN: RTO options depend on the chosen state.
  const rtoOptions = useMemo(
    () => STATES.find((s) => s.code === stateCode)?.rtos ?? [],
    [stateCode],
  );

  function handleProceed() {
    setSubmitted("");
    if (!consent) {
      setError(t("consentRequired"));
      return;
    }
    setError("");
    setSubmitted(
      tab === "reg"
        ? `${t("regNumberLabel")}: ${regNo || "—"}`
        : `${t("selectState")}: ${stateCode || "—"} / ${t("selectRto")}: ${rto || "—"}`,
    );
  }

  function handleReset() {
    setRegNo("");
    setStateCode("");
    setRto("");
    setConsent(false);
    setError("");
    setSubmitted("");
  }

  const tabBtn = (active: boolean) =>
    `flex-1 rounded-lg border-2 p-4 text-left transition-colors ${
      active ? "border-gov-navy bg-gov-sky" : "border-gray-200 bg-white hover:border-gov-blue/40"
    }`;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <p className="mb-4 text-sm font-medium text-gray-500">{t("chooseService")}</p>

      {/* Tabs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => setTab("reg")} className={tabBtn(tab === "reg")}>
          <span className="block font-semibold text-gov-navy">{t("byRegNumber")}</span>
          <span className="mt-1 block text-xs text-gray-500">{t("byRegNumberDesc")}</span>
        </button>
        <button type="button" onClick={() => setTab("authority")} className={tabBtn(tab === "authority")}>
          <span className="block font-semibold text-gov-navy">{t("byAuthority")}</span>
          <span className="mt-1 block text-xs text-gray-500">{t("byAuthorityDesc")}</span>
        </button>
      </div>

      {/* Inputs */}
      <div className="mt-5 space-y-4">
        {tab === "reg" ? (
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">{t("regNumberLabel")}</span>
            <input
              value={regNo}
              onChange={(e) => setRegNo(e.target.value.toUpperCase())}
              placeholder={t("regNumberPlaceholder")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 uppercase tracking-wider focus:border-gov-navy focus:outline-none focus:ring-1 focus:ring-gov-navy"
            />
          </label>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {/* State dropdown */}
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{t("selectState")}</span>
              <select
                value={stateCode}
                onChange={(e) => {
                  setStateCode(e.target.value);
                  setRto(""); // reset dependent dropdown when state changes
                }}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-gov-navy focus:outline-none focus:ring-1 focus:ring-gov-navy"
              >
                <option value="">— {t("selectState")} —</option>
                {STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </label>

            {/* RTO dropdown — disabled until a state is picked */}
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{t("selectRto")}</span>
              <select
                value={rto}
                onChange={(e) => setRto(e.target.value)}
                disabled={!stateCode}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-gov-navy focus:outline-none focus:ring-1 focus:ring-gov-navy"
              >
                <option value="">
                  {stateCode ? `— ${t("selectRto")} —` : t("selectStateFirst")}
                </option>
                {rtoOptions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {/* Consent */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-gov-navy"
          />
          <span>{t("consent")}</span>
        </label>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        {submitted && (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">✓ {submitted}</p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleProceed}
            className="rounded-md bg-gov-navy px-6 py-2.5 font-semibold text-white transition-colors hover:bg-gov-blue"
          >
            {t("proceed")}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-gray-300 px-6 py-2.5 font-semibold text-gray-600 hover:bg-gray-50"
          >
            {t("reset")}
          </button>
        </div>
      </div>
    </div>
  );
}
