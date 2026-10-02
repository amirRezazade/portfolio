"use client";

import { Languages } from "lucide-react";
import { cn } from "../../../lib/cn";

export default function LanguageSwitcher({ lang, setLang, label }) {
  const nextLang = lang === "fa" ? "en" : "fa";

  return (
    <button
      className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-[rgb(var(--text-rgb)/0.06)] px-2.5 text-[0.82rem] text-[rgb(var(--text-rgb)/0.6)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.06)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.42)] focus-visible:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:outline-none max-[560px]:min-h-[38px] max-[560px]:gap-1 max-[560px]:px-2 xs:px-1.5 xs:text-[0.76rem]"
      type="button"
      aria-label={label}
      onClick={() => setLang(nextLang)}
    >
      <Languages aria-hidden="true" size={16} className="max-[560px]:hidden" />
      <span className={cn(lang === "fa" && "font-black text-[var(--text)] drop-shadow-[0_0_10px_rgb(var(--secondary-rgb)/0.5)]")}>FA</span>
      <span className="h-3.5 w-px bg-[rgb(var(--text-rgb)/0.15)]" aria-hidden="true" />
      <span className={cn(lang === "en" && "font-black text-[var(--text)] drop-shadow-[0_0_10px_rgb(var(--secondary-rgb)/0.5)]")}>EN</span>
    </button>
  );
}
