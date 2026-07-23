import type { Metadata } from "next";
import "./globals.css";

// Metadata = the info browsers/search engines read (browser tab title, description).
export const metadata: Metadata = {
  title: "VAHAN 4.0 | Citizen Services",
  description:
    "Rebuild of the VAHAN 4.0 Citizen Services landing page — multilingual, responsive, with dynamic fonts.",
};

// RootLayout wraps EVERY page. `children` is whatever page is currently shown.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // React.ReactNode = "any renderable content"
}) {
  return (
    <html lang="en">
      <body className="font-app antialiased">{children}</body>
    </html>
  );
}
