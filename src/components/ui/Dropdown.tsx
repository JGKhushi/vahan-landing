"use client";

import { useRef, useState, type ReactNode } from "react";
import { useClickOutside } from "@/lib/useClickOutside";

// Small chevron icon that rotates when the menu is open.
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface DropdownProps {
  label: ReactNode; // what shows on the trigger button
  children: ReactNode; // the panel contents (links, options...)
  align?: "left" | "right"; // which edge the panel lines up with
  buttonClassName?: string; // let callers restyle the trigger
  panelClassName?: string; // let callers resize the panel
  ariaLabel?: string; // accessible name when label is an icon
}

// A generic, accessible dropdown: a button that toggles a floating panel.
// Used by the language switcher AND every nav menu — one component, many uses.
export function Dropdown({
  label,
  children,
  align = "left",
  buttonClassName = "",
  panelClassName = "",
  ariaLabel,
}: DropdownProps) {
  const [open, setOpen] = useState(false); // is the panel showing?
  const ref = useRef<HTMLDivElement>(null); // wraps button + panel

  // Close when clicking outside (only listens while open).
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button toggles the panel */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 ${buttonClassName}`}
      >
        {label}
        <Chevron open={open} />
      </button>

      {/* The floating panel — only in the DOM while open */}
      {open && (
        <div
          role="menu"
          // clicking any item inside also closes the menu
          onClick={() => setOpen(false)}
          className={`absolute z-50 mt-2 min-w-[14rem] overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-xl ${
            align === "right" ? "right-0" : "left-0"
          } ${panelClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

// A single clickable row inside a dropdown panel.
export function DropdownItem({
  children,
  onClick,
  active = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gov-sky ${
        active ? "bg-gov-sky font-semibold text-gov-navy" : "text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
