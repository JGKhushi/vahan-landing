"use client"; // This component runs in the browser (it uses state, effects, localStorage).

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LOCALE, getLocaleMeta, type Locale } from "./config";
import { dictionaries, type DictKey } from "./dictionaries";

// The "shape" of everything the provider hands to the rest of the app.
interface LanguageContextValue {
  locale: Locale; // the active language code
  setLocale: (l: Locale) => void; // change the language
  t: (key: DictKey) => string; // translate a key into the active language
}

// Create the shared "channel". Starts undefined; the Provider fills it in.
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "vahan-locale"; // localStorage key so the choice survives refreshes

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // The single source of truth for the current language.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // On first load, restore the language the user picked last time (if any).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && dictionaries[saved]) {
      setLocaleState(saved);
    }
  }, []);

  // Whenever the language changes, do three things:
  useEffect(() => {
    const meta = getLocaleMeta(locale);
    // 1) Tell the browser/screen-readers which language the page is in.
    document.documentElement.lang = locale;
    // 2) THE DYNAMIC FONT SWITCH: point the app's font variable at this
    //    language's font, so all text using `font-app` re-renders in it.
    document.documentElement.style.setProperty("--font-app", meta.fontVar);
    // 3) Remember the choice for next time.
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  // A stable function components call to change language.
  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  // The translate function: look up `key` in the active language's dictionary.
  const t = useCallback(
    (key: DictKey) => dictionaries[locale][key] ?? dictionaries[DEFAULT_LOCALE][key],
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// A small hook so any component can do: const { t, locale, setLocale } = useLanguage();
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside a <LanguageProvider>");
  }
  return ctx;
}
