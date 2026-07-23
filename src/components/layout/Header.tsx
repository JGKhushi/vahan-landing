"use client";

import { useState } from "react";
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { NAV_MENUS, QUICK_LINKS } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-3 py-2.5 sm:px-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Logo className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-gov-navy sm:text-xl">
              {t("portalName")}
            </p>
            <p className="text-[11px] text-gray-500 sm:text-xs">{t("portalTagline")}</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_MENUS.map((menu) => (
            <Dropdown
              key={menu.labelKey}
              buttonClassName="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gov-sky hover:text-gov-navy"
              label={<span>{t(menu.labelKey)}</span>}
            >
              {menu.items.map((item) => (
                <DropdownItem key={item.labelKey}>{t(item.labelKey)}</DropdownItem>
              ))}
            </Dropdown>
          ))}
          <span className="mx-1 h-5 w-px bg-gray-200" />
          {QUICK_LINKS.map((key) => (
            <button
              key={key}
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gov-sky hover:text-gov-navy"
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="rounded-md p-2 text-gov-navy hover:bg-gov-sky lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-3 pb-4 lg:hidden">
          {NAV_MENUS.map((menu) => (
            <div key={menu.labelKey} className="py-1">
              <p className="px-2 pt-3 text-xs font-semibold uppercase tracking-wide text-gov-navy">
                {t(menu.labelKey)}
              </p>
              {menu.items.map((item) => (
                <button
                  key={item.labelKey}
                  type="button"
                  className="block w-full rounded px-4 py-2 text-left text-sm text-gray-700 hover:bg-gov-sky"
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          ))}
          <div className="mt-2 flex flex-wrap gap-2 border-t border-gray-100 pt-3">
            {QUICK_LINKS.map((key) => (
              <button
                key={key}
                type="button"
                className="rounded-md bg-gov-sky px-3 py-1.5 text-sm text-gov-navy"
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
