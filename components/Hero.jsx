"use client";

import { ArrowDown, FileDown } from "lucide-react";
import { heroContent, socialLinks } from "../data/hero";
import { BrandIcon } from "./BrandIcon";
import { cn } from "../lib/cn";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function Hero({ lang, isReady }) {
  const t = heroContent[lang];
  const isRtl = lang === "fa";

  const reveal = (delayClass = "") => cn("transition-all duration-700 ease-out", delayClass, isReady ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0");

  return (
    <section id="home" className={cn("relative isolate flex min-h-screen w-full items-center justify-start overflow-hidden px-[clamp(18px,5vw,88px)] pb-24 pt-[calc(76px+72px)] max-sm:px-4 max-sm:pb-16 max-sm:pt-[calc(76px+48px)] xs:px-3", isRtl ? "justify-end text-right" : "justify-start text-left")}>
      <div className={cn("pointer-events-none absolute inset-0 -z-10", isRtl ? "bg-[radial-gradient(circle_at_82%_44%,rgb(var(--primary-rgb)/0.18),transparent_34%)]" : "bg-[radial-gradient(circle_at_18%_44%,rgb(var(--primary-rgb)/0.18),transparent_34%)]")} aria-hidden="true" />

      <div className={cn("w-full max-w-[700px]", isRtl ? "mr-0" : "ml-0")}>
        <p className={cn("mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--surface-rgb)/0.34)] px-3 py-2 text-[0.82rem] font-bold text-[rgb(var(--text-rgb)/0.85)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.04)] backdrop-blur-sm max-sm:text-[0.76rem] xs:text-[0.72rem]", reveal("delay-[80ms]"))}>
          <span className="size-2 rounded-full bg-[var(--secondary)] shadow-[0_0_0_5px_rgb(var(--secondary-rgb)/0.12),0_0_18px_rgb(var(--secondary-rgb)/0.55)]" aria-hidden="true" />
          {t.badge}
        </p>

        <p className={cn("mb-3 text-[clamp(0.86rem,1.4vw,0.98rem)] font-extrabold tracking-[0.08em] text-[var(--secondary)]", isRtl && "tracking-normal", reveal("delay-[150ms]"))}>{t.role}</p>

        <h1 className={cn("max-w-[670px] text-[clamp(2.15rem,4.6vw,4rem)] font-black text-[var(--text)] text-balance max-sm:text-[clamp(1.95rem,9.2vw,3.05rem)] xs:text-[clamp(1.72rem,8.8vw,2.10rem)]", isRtl && "leading-[1.1] ", reveal("delay-[220ms]"))}>
          <span>{t.titlePrefix} </span>
          <strong className="text-[var(--accent)] drop-shadow-[0_0_34px_rgb(var(--accent-rgb)/0.22)]">{t.name}</strong>
          <span>{isRtl ? ` ${t.titleSuffix}` : t.titleSuffix}</span>
        </h1>

        <p className={cn("mt-6 max-w-[620px] text-[clamp(1.05rem,1.85vw,1.42rem)] font-extrabold leading-[1.7] text-[rgb(var(--text-rgb)/0.95)]", isRtl && "me-auto", reveal("delay-[300ms]"))}>{t.lead}</p>

        <p className={cn("mt-4 max-w-[620px] text-[clamp(0.94rem,1.35vw,1.05rem)] leading-[2] text-[rgb(var(--text-rgb)/0.85)] max-sm:text-[0.92rem]", isRtl && "me-auto", reveal("delay-[380ms]"))}>{t.description}</p>

        <div className={cn("relative z-[5] mt-8 flex flex-wrap items-center gap-3 max-sm:items-stretch", isRtl && "justify-start", reveal("delay-[460ms]"))}>
          <a className="cosmic-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-[0.92rem] font-extrabold max-sm:flex-1 max-sm:basis-full" href="#projects">
            <span>{t.actions.projects}</span>
            <ArrowDown aria-hidden="true" size={17} />
          </a>
          <ResumeDownloadButton lang={lang} label={t.actions.resume} variant="hero" />
        </div>

        <div className={cn("relative z-[5] mt-6 flex flex-wrap items-center gap-4 max-sm:mb-4 max-sm:justify-between", reveal("delay-[540ms]"))}>
          <a className="relative font-extrabold text-[rgb(var(--text-rgb)/0.85)] transition after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:rounded-full after:bg-[rgb(var(--accent-rgb)/0.55)] hover:-translate-y-0.5 hover:text-[var(--text)] focus-visible:-translate-y-0.5 focus-visible:text-[var(--text)] focus-visible:outline-none" href="#contact">
            {t.actions.contact}
          </a>

          <div className="inline-flex items-center gap-2" aria-label={isRtl ? "لینک‌های اجتماعی" : "Social links"}>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                className="grid size-[38px] place-items-center rounded-full border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--surface-rgb)/0.34)] text-[rgb(var(--text-rgb)/0.75)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.35)] hover:bg-[rgb(var(--accent-rgb)/0.1)] hover:text-[var(--text)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:outline-none"
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={t.socials[link.id]}
                title={t.socials[link.id]}
              >
                <BrandIcon name={link.id} className="size-[17px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
