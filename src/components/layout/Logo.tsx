// Simple emblem badge (a stylised chakra) — avoids using official government artwork.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1c3f94" />
      <circle cx="24" cy="24" r="15" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="24" cy="24" r="3" fill="#fff" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={24 + 4 * Math.cos(a)}
            y1={24 + 4 * Math.sin(a)}
            x2={24 + 15 * Math.cos(a)}
            y2={24 + 15 * Math.sin(a)}
            stroke="#fff"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}
