"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export default function CodeMarkLogo({ variant = "nav", className, title = "Amir Rezazade logo" }) {
  const reactId = useId().replace(/:/g, "");
  const leftGradientId = `codeMarkLeft-${reactId}`;
  const rightGradientId = `codeMarkRight-${reactId}`;
  const slashGradientId = `codeMarkSlash-${reactId}`;
  const orbitGradientId = `codeMarkOrbit-${reactId}`;
  const infinityGradientId = `codeMarkInfinity-${reactId}`;
  const softGlowId = `codeMarkGlow-${reactId}`;

  return (
    <span className={cn("code-mark", `code-mark--${variant}`, className)} aria-hidden={title ? undefined : true}>
      <svg className="code-mark__svg" viewBox="0 0 128 128" role={title ? "img" : undefined} aria-label={title || undefined}>
        <defs>
          <linearGradient id={leftGradientId} x1="28" x2="64" y1="76" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-cyan)" />
            <stop offset="45%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <linearGradient id={rightGradientId} x1="76" x2="105" y1="96" y2="63" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-rose)" />
            <stop offset="55%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--logo-amber)" />
          </linearGradient>
          <linearGradient id={slashGradientId} x1="77" x2="56" y1="28" y2="104" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--text)" />
            <stop offset="64%" stopColor="rgb(var(--text-rgb) / 0.96)" />
            <stop offset="100%" stopColor="rgb(var(--text-rgb) / 0.9)" />
          </linearGradient>
          <linearGradient id={orbitGradientId} x1="10" x2="118" y1="70" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-cyan)" stopOpacity="0.08" />
            <stop offset="18%" stopColor="var(--logo-cyan)" stopOpacity="0.95" />
            <stop offset="52%" stopColor="var(--text)" stopOpacity="0.22" />
            <stop offset="80%" stopColor="var(--accent)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id={infinityGradientId} x1="20" x2="108" y1="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--logo-cyan)" />
            <stop offset="36%" stopColor="var(--text)" />
            <stop offset="64%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
          <filter id={softGlowId} x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="code-mark__space" aria-hidden="true">
          <ellipse className="code-mark__nebula code-mark__nebula--one" cx="66" cy="72" rx="55" ry="24" />
          <ellipse className="code-mark__nebula code-mark__nebula--two" cx="68" cy="70" rx="44" ry="18" />
          <ellipse className="code-mark__orbit code-mark__orbit--back" cx="64" cy="70" rx="58" ry="19" stroke={`url(#${orbitGradientId})`} />
          <ellipse className="code-mark__orbit code-mark__orbit--front" cx="64" cy="70" rx="51" ry="16" stroke={`url(#${orbitGradientId})`} />
        </g>

        <g className="code-mark__infinity" aria-hidden="true">
          <path className="code-mark__infinity-track" d="M22 64 C22 34 52 34 64 64 C76 94 106 94 106 64 C106 34 76 34 64 64 C52 94 22 94 22 64" />
          <path className="code-mark__infinity-ribbon" d="M22 64 C22 34 52 34 64 64 C76 94 106 94 106 64 C106 34 76 34 64 64 C52 94 22 94 22 64" stroke={`url(#${infinityGradientId})`} />
          <path className="code-mark__infinity-runner" d="M22 64 C22 34 52 34 64 64 C76 94 106 94 106 64 C106 34 76 34 64 64 C52 94 22 94 22 64" />
        </g>

        <g className="code-mark__symbol" filter={`url(#${softGlowId})`}>
          <path className="code-mark__shadow code-mark__shadow--left" d="M59 36 33 62 59 88" />
          <path className="code-mark__shadow code-mark__shadow--right" d="M78 52 101 75 78 98" />
          <path className="code-mark__beam code-mark__beam--left" d="M59 36 33 62 59 88" stroke={`url(#${leftGradientId})`} />
          <path className="code-mark__beam code-mark__beam--right" d="M78 52 101 75 78 98" stroke={`url(#${rightGradientId})`} />
          <path className="code-mark__slash" d="M76 29 L53 101" stroke={`url(#${slashGradientId})`} />
        </g>

        <g className="code-mark__particles" aria-hidden="true">
          <circle className="code-mark__spark code-mark__spark--one" cx="26" cy="84" r="3.1" />
          <circle className="code-mark__spark code-mark__spark--two" cx="98" cy="52" r="2.2" />
          <circle className="code-mark__spark code-mark__spark--three" cx="105" cy="74" r="2.4" />
          <circle className="code-mark__spark code-mark__spark--four" cx="92" cy="99" r="1.8" />
          <circle className="code-mark__spark code-mark__spark--five" cx="47" cy="94" r="1.6" />
        </g>
      </svg>
    </span>
  );
}
