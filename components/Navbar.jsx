"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown, Sparkles } from "lucide-react";
import { navItems, dictionary } from "../data/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "../lib/cn";

export default function Navbar({ lang, setLang, isReady = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = dictionary[lang];
  const dir = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 flex justify-center px-[clamp(14px,3vw,34px)] pt-4 transition-all duration-700 ease-out xs:px-2.5", isReady ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0")}>
      <a className="fixed start-4 top-2.5 z-[80] -translate-y-[160%] rounded-full bg-[var(--text)] px-4 py-2.5 font-extrabold text-[var(--bg)] transition-transform focus:translate-y-0" href="#main">
        {lang === "fa" ? "رفتن به محتوای اصلی" : "Skip to main content"}
      </a>

      <nav
        className={cn(
          "relative z-[60] flex min-h-[60px] w-full max-w-[1120px] items-center justify-between gap-4 overflow-hidden rounded-full border px-2.5 py-2 shadow-[0_18px_70px_rgb(var(--shadow-rgb)/0.36),inset_0_1px_0_rgb(var(--text-rgb)/0.08)] backdrop-blur-[18px] backdrop-saturate-150 transition-all duration-300 xs:gap-2 xs:px-2",
          isScrolled ? "border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--surface-rgb)/0.78)] shadow-[0_18px_80px_rgb(var(--shadow-rgb)/0.42),0_0_40px_rgb(var(--accent-rgb)/0.1),inset_0_1px_0_rgb(var(--text-rgb)/0.08)]" : "border-[rgb(var(--accent-rgb)/0.18)] bg-[rgb(var(--surface-rgb)/0.48)]",
        )}
        aria-label={lang === "fa" ? "ناوبری اصلی" : "Main navigation"}
      >
        <a className="inline-flex min-w-max items-center gap-2.5 rounded-full px-2 py-1 transition hover:bg-[rgb(var(--text-rgb)/0.04)] focus-visible:bg-[rgb(var(--text-rgb)/0.04)] focus-visible:outline-none" href="#home" aria-label={`${t.brandName} home`} onClick={closeMenu}>
          <span className="relative grid size-[38px] place-items-center rounded-full border border-[rgb(var(--accent-rgb)/0.36)] bg-[rgb(var(--bg-rgb)/0.72)] shadow-[0_0_22px_rgb(var(--accent-rgb)/0.14)] max-[560px]:size-[35px]" aria-hidden="true">
            <span className="absolute inset-x-0.5 inset-y-[7px] -rotate-[28deg] rounded-full border border-[rgb(var(--primary-rgb)/0.5)]" />
            <span className="absolute inset-x-[7px] inset-y-0.5 rotate-[32deg] rounded-full border border-[rgb(var(--accent-rgb)/0.42)]" />
            <span className="relative z-10 size-3 rounded-full bg-gradient-to-br from-[var(--text)] via-[var(--accent)] to-[var(--primary)] shadow-[0_0_16px_rgb(var(--accent-rgb)/0.5)]" />
          </span>
          <span className="grid gap-0.5 leading-none">
            <strong className="text-[0.9rem] font-black tracking-wide text-[var(--text)] max-[560px]:text-[0.82rem] xs:text-[0.78rem]">{t.brandName}</strong>
            <small className="text-[0.62rem] text-[rgb(var(--muted-rgb)/1)] max-[560px]:hidden">{t.brandRole}</small>
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[rgb(var(--text-rgb)/0.06)] bg-[rgb(var(--shadow-rgb)/0.15)] p-1 lg:flex" role="list">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                role="listitem"
                key={item.id}
                className={cn(
                  "relative inline-flex min-h-[34px] items-center rounded-full px-3.5 text-[0.8rem] font-bold text-[rgb(var(--text-rgb)/0.75)] transition hover:bg-[rgb(var(--text-rgb)/0.06)] hover:text-[var(--text)] focus-visible:bg-[rgb(var(--text-rgb)/0.06)] focus-visible:text-[var(--text)] focus-visible:outline-none",
                  isActive && "bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.82)] to-[rgb(var(--accent-rgb)/0.46)] text-[var(--text)] drop-shadow-[0_0_14px_rgb(var(--accent-rgb)/0.42)] after:absolute after:bottom-1 after:start-4 after:end-4 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-[var(--accent)] after:to-transparent",
                )}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label[lang]}</span>
              </a>
            );
          })}
        </div>

        <div className="inline-flex items-center justify-end gap-2">
          <LanguageSwitcher lang={lang} setLang={setLang} label={t.switchLanguage} />

          <a
            className="hidden min-h-10 items-center gap-2 rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.82)] to-[rgb(var(--accent-rgb)/0.46)] px-3.5 text-[0.84rem] font-extrabold text-[var(--text)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.06)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.42)] focus-visible:outline-none lg:inline-flex"
            href="/AmirRezazade.pdf"
            download
          >
            <FileDown aria-hidden="true" size={16} />
            <span>{t.resume}</span>
          </a>

          <button
            className="grid min-h-[39px] w-[39px] cursor-pointer place-items-center rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-[rgb(var(--text-rgb)/0.06)] text-[var(--text)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.06)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.42)] focus-visible:outline-none lg:hidden"
            type="button"
            aria-label={isMenuOpen ? t.close : t.menu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={cn("fixed inset-0 z-40 bg-[rgb(var(--bg-rgb)/0.58)] backdrop-blur-md transition-opacity duration-300 lg:hidden", isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")} aria-hidden={!isMenuOpen}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgb(var(--text-rgb)/.85)_0_1px,transparent_1px),radial-gradient(circle,rgb(var(--accent-rgb)/.72)_0_1px,transparent_1px)] [background-position:20px_30px,42px_80px] [background-size:74px_74px,119px_119px]" aria-hidden="true" />

        <div className={cn("absolute inset-x-3.5 top-[92px] grid gap-4 rounded-[28px] border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--surface-rgb)/0.78)] p-4 shadow-[0_24px_100px_rgb(var(--shadow-rgb)/0.55)] transition-transform duration-300", isMenuOpen ? "translate-y-0 scale-100" : "-translate-y-3 scale-[0.97]")}>
          <div className="flex items-center gap-3 text-[var(--text)]">
            <Sparkles aria-hidden="true" size={18} className="text-[var(--accent)] drop-shadow-[0_0_8px_rgb(var(--accent-rgb)/0.5)]" />
            <div>
              <strong>{t.mobileMenuTitle}</strong>
              <p className="mt-1 text-[0.82rem] text-[rgb(var(--muted-rgb)/1)]">{t.mobileMenuSubtitle}</p>
            </div>
          </div>

          <div className="grid gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  className={cn(
                    "flex min-h-[54px] items-center justify-between rounded-[18px] border border-[rgb(var(--text-rgb)/0.07)] bg-[rgb(var(--text-rgb)/0.045)] px-4 font-black text-[rgb(var(--text-rgb)/0.8)] transition hover:border-[rgb(var(--accent-rgb)/0.35)] hover:bg-gradient-to-br hover:from-[rgb(var(--primary-rgb)/0.18)] hover:to-[rgb(var(--accent-rgb)/0.11)] hover:text-[var(--text)] focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:bg-gradient-to-br focus-visible:from-[rgb(var(--primary-rgb)/0.18)] focus-visible:to-[rgb(var(--accent-rgb)/0.11)] focus-visible:text-[var(--text)] focus-visible:outline-none",
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                    isActive && "border-[rgb(var(--accent-rgb)/0.38)] bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.28)] to-[rgb(var(--accent-rgb)/0.12)] text-[var(--text)]",
                  )}
                  style={{ transitionDelay: isMenuOpen ? `${index * 55}ms` : "0ms" }}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <span>{item.label[lang]}</span>
                  <small className="text-xs text-[rgb(var(--accent-rgb)/0.86)] [direction:ltr]">{String(index + 1).padStart(2, "0")}</small>
                </a>
              );
            })}
          </div>

          <a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[18px] border border-[rgb(var(--text-rgb)/0.1)] bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.82)] to-[rgb(var(--accent-rgb)/0.46)] font-black text-[var(--text)]" href="/AmirRezazade.pdf" download onClick={closeMenu}>
            <FileDown aria-hidden="true" size={17} />
            <span>{t.resume}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
