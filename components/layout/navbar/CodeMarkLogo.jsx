"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export default function CodeMarkLogo({ variant = "nav", detail = variant === "nav" ? "simple" : "full", className, title = "Amir Rezazade logo" }) {
  const reactId = useId().replace(/:/g, "");
  const topId = `markTop-${reactId}`;
  const bottomId = `markBottom-${reactId}`;
  const isFull = detail === "full";
  const arm = isFull ? 11.5 : 13;
  const chevron = `M${arm} -${arm} L-2 0 L${arm} ${arm}`;

  return (
    <span className={cn("code-mark", `code-mark--${variant}`, className)} aria-hidden={title ? undefined : true}>
      <svg className="code-mark__svg" viewBox="0 0 64 64" role={title ? "img" : undefined} aria-label={title || undefined}>
        <defs>
          <linearGradient id={topId} x1="10" y1="34" x2="36" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-ink-a)" />
            <stop offset="100%" stopColor="var(--logo-ink-b)" />
          </linearGradient>
          <linearGradient id={bottomId} x1="28" y1="56" x2="54" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-pale-a)" />
            <stop offset="100%" stopColor="var(--logo-pale-b)" />
          </linearGradient>
        </defs>

        <g className="code-mark__glyph">
          {/* The positioning transform lives on the inner <path>; the animated
              CSS transform lives on the wrapper <g>. Keeping them on separate
              elements stops CSS from overriding the SVG transform attribute. */}
          <g className="code-mark__chevron code-mark__chevron--top">
            <path d={chevron} transform={isFull ? "translate(26,26) rotate(135)" : "translate(25,25) rotate(135)"} stroke={`url(#${topId})`} strokeWidth={isFull ? 8.5 : 9.5} />
          </g>
          <g className="code-mark__chevron code-mark__chevron--bottom">
            <path d={chevron} transform={isFull ? "translate(38,38) rotate(315)" : "translate(39,39) rotate(315)"} stroke={`url(#${bottomId})`} strokeWidth={isFull ? 8.5 : 9.5} />
          </g>

          {isFull && (
            <g className="code-mark__accents">
              <path className="code-mark__dash code-mark__dash--top" d="M46 20 L51 25" />
              <path className="code-mark__dash code-mark__dash--bottom" d="M18 44 L13 39" />
            </g>
          )}
        </g>

        {isFull && (
          <g className="code-mark__dots">
            <circle className="code-mark__dot code-mark__dot--top" cx="46" cy="11" r="3.3" />
            <circle className="code-mark__dot code-mark__dot--bottom" cx="18" cy="53" r="3.3" />
          </g>
        )}
      </svg>
    </span>
  );
}
