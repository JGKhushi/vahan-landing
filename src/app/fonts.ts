// Dynamic fonts: one font per script. next/font downloads & self-hosts each font
// at build time and gives us a CSS variable we can switch between at runtime.
import {
  Inter,
  Noto_Sans_Devanagari,
  Noto_Sans_Bengali,
  Noto_Sans_Tamil,
  Noto_Sans_Telugu,
} from "next/font/google";

// Latin script (English) — used as the app's default / fallback.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap", // show fallback text immediately, swap in the real font when ready
});

// Devanagari script — shared by Hindi (हिन्दी) and Marathi (मराठी).
export const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-devanagari",
  display: "swap",
});

// Bengali script — বাংলা.
export const bengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  display: "swap",
});

// Tamil script — தமிழ்.
export const tamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  variable: "--font-tamil",
  display: "swap",
});

// Telugu script — తెలుగు.
export const telugu = Noto_Sans_Telugu({
  subsets: ["telugu", "latin"],
  variable: "--font-telugu",
  display: "swap",
});

// All font CSS-variable class names, applied together on <html> so every
// --font-* variable is available for us to switch --font-app between.
export const allFontVariables = [
  inter.variable,
  devanagari.variable,
  bengali.variable,
  tamil.variable,
  telugu.variable,
].join(" ");
