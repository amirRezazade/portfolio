"use client";

import { ArrowDown } from "lucide-react";
import { heroContent, socialLinks } from "@/data/hero";
import { BrandIcon } from "../../ui/BrandIcon";
import { cn } from "@/lib/cn";
import ResumeDownloadButton from "../../ui/ResumeDownloadButton";

export default function Hero({ lang, isReady }) {
  const t = heroContent[lang];
  const isRtl = lang === "fa";

  const reveal = (delayClass = "") => cn("transition-all duration-700 ease-out", delayClass, isReady ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0");

  return (
    <section id="home" className={cn("relative isolate flex min-h-screen w-full items-center justify-start overflow-hidden px-[clamp(18px,5vw,88px)] pb-24 pt-[calc(76px+72px)] max-sm:px-4 max-sm:pb-16 max-sm:pt-[calc(76px+48px)] xs:px-3", isRtl ? "justify-end text-right" : "justify-start text-left")}>
      <div className={cn("pointer-events-none absolute inset-0 -z-10", isRtl ? "bg-[radial-gradient(circle_at_82%_44%,rgb(var(--primary-rgb)/0.18),transparent_34%)]" : "bg-[radial-gradient(circle_at_18%_44%,rgb(var(--primary-rgb)/0.18),transparent_34%)]")} aria-hidden="true" />

      <div className={cn("w-full max-w-[760px]", isRtl ? "mr-0" : "ml-0")}>
        <p className={cn("mb-5 inline-flex w-fit items-center gap-3 text-[0.9rem] font-extrabold text-[rgb(var(--text-rgb)/0.76)] max-sm:text-[0.74rem]", reveal("delay-[80ms]"))}>
          <span className={cn("h-0.5 w-11 rounded-full  from-[var(--secondary)] to-[var(--accent)/0.5] ", isRtl ? "bg-gradient-to-r" : "bg-gradient-to-l")} aria-hidden="true" />
          <span>{t.kicker}</span>
        </p>

        <h1 className={cn("grid max-w-[760px] gap-1 text-[clamp(3rem,6vw,5rem)] font-black leading-[0.95]  text-[var(--text)] text-balance max-sm:text-[clamp(2.5rem,13vw,4.35rem)] xs:text-[clamp(2.25rem,12.5vw,3.5rem)]", isRtl && "leading-[1.08] ", reveal("delay-[170ms]"))}>
          {t.headlineTop}
          <span className="bg-gradient-to-r from-[var(--secondary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgb(var(--accent-rgb)/0.2)]">{" " + t.headlineAccent + " "}</span>
          {t.headlineBottom ? <span>{t.headlineBottom}</span> : null}
        </h1>

        <p className={cn("mt-6 max-w-[610px] text-[clamp(0.98rem,1.55vw,1.18rem)] font-bold leading-[1.9] text-[rgb(var(--text-rgb)/0.90)] max-sm:text-[0.94rem]", isRtl && "me-auto", reveal("delay-[280ms]"))}>{t.lead}</p>

        <p className={cn("mt-3 max-w-[590px] text-[clamp(0.9rem,1.2vw,1rem)] leading-[2] text-[rgb(var(--muted-rgb)/0.92)] max-sm:text-[0.88rem]", isRtl && "me-auto", reveal("delay-[360ms]"))}>{t.description}</p>

        <div className={cn("relative z-[5] mt-8 flex flex-wrap items-center gap-3 max-sm:items-stretch", isRtl && "justify-start", reveal("delay-[450ms]"))}>
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
