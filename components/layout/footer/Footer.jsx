"use client";

import { Heart } from "lucide-react";
import { socialLinks } from "@/data/hero";
import { BrandIcon } from "../../ui/BrandIcon";
import { cn } from "@/lib/cn";

const footerContent = {
  fa: {
    copyright: "© ۲۰۲۶ امیر رضازاده",
    note: "طراحی و توسعه با تمرکز روی جزئیات رابط کاربری",
    aria: "لینک‌های فوتر",
  },
  en: {
    copyright: "© 2026 Amir Rezazade",
    note: "Designed and developed with attention to UI details",
    aria: "Footer links",
  },
};

export default function Footer({ lang }) {
  const t = footerContent[lang] ?? footerContent.fa;
  const isRtl = lang === "fa";

  return (
    <footer className="relative z-10 w-full px-[clamp(18px,4vw,60px)] pb-8 pt-2 xs:px-2">
      <div className={cn("mx-auto flex w-full items-center justify-between gap-4 rounded-[28px] border border-[rgb(var(--accent-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.24)] px-5 py-4 text-sm text-[rgb(var(--muted-rgb)/0.86)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.035)] backdrop-blur-[3px] max-md:flex-col max-md:items-stretch xs:rounded-3xl xs:px-4", isRtl ? "text-right" : "text-left")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 max-md:justify-center">
          <span className="font-black text-[rgb(var(--text-rgb)/0.88)]">{t.copyright}</span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 max-md:justify-center">
          <span className="inline-flex items-center gap-1.5 font-bold">
            <Heart aria-hidden="true" size={14} className="text-[var(--accent)]" />
            {t.note}
          </span>

          <nav className="inline-flex items-center gap-2" aria-label={t.aria}>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                className="grid size-9 place-items-center rounded-full border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--surface-rgb)/0.24)] text-[rgb(var(--text-rgb)/0.72)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.34)] hover:bg-[rgb(var(--accent-rgb)/0.08)] hover:text-[var(--text)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.34)] focus-visible:outline-none"
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.id}
              >
                <BrandIcon name={link.id} className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
