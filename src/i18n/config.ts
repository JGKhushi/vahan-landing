// Central list of every language the site supports.
// Each entry maps a language to (a) how its name is shown in its own script,
// and (b) which font CSS-variable should drive the UI when it's active.

// A union type: `Locale` can ONLY be one of these six codes (TypeScript safety).
export type Locale = "en" | "hi" | "mr" | "bn" | "ta" | "te";

// The shape of one language entry.
export interface LocaleMeta {
  code: Locale; // short code, e.g. "hi"
  native: string; // name in its own script, e.g. "हिन्दी"
  english: string; // name in English, e.g. "Hindi"
  fontVar: string; // the CSS variable that font uses, e.g. "var(--font-devanagari)"
}

// The ordered list shown in the language dropdown.
export const LOCALES: LocaleMeta[] = [
  { code: "en", native: "English", english: "English", fontVar: "var(--font-latin)" },
  { code: "hi", native: "हिन्दी", english: "Hindi", fontVar: "var(--font-devanagari)" },
  { code: "mr", native: "मराठी", english: "Marathi", fontVar: "var(--font-devanagari)" },
  { code: "bn", native: "বাংলা", english: "Bengali", fontVar: "var(--font-bengali)" },
  { code: "ta", native: "தமிழ்", english: "Tamil", fontVar: "var(--font-tamil)" },
  { code: "te", native: "తెలుగు", english: "Telugu", fontVar: "var(--font-telugu)" },
];

// The language the site starts in.
export const DEFAULT_LOCALE: Locale = "en";

// Helper: given a code, return that language's metadata (falls back to English).
export function getLocaleMeta(code: Locale): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}
