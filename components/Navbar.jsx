"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navItems, dictionary } from "../data/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { cn } from "../lib/cn";
import NavbarLogo from "./NavbarLogo";

export default function Navbar({ lang, setLang, isReady = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0, transform: "translateX(0px)", width: "0px" });
  const linksRef = useRef(null);

  const t = dictionary[lang];
  const isRtl = lang === "fa";
  const dir = isRtl ? "rtl" : "ltr";

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
    let ticking = false;

    const detectActiveSection = () => {
      const probeLine = window.innerHeight * 0.34;
      let current = navItems[0]?.id ?? "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= probeLine && rect.bottom > probeLine) {
          current = item.id;
          break;
        }

        if (rect.top <= probeLine) {
          current = item.id;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      if (pageBottom) {
        current = navItems.at(-1)?.id ?? current;
      }

      setActiveSection((previous) => (previous === current ? previous : current));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(detectActiveSection);
    };

    detectActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = linksRef.current;
    const activeLink = root?.querySelector(`[data-nav-id="${activeSection}"]`);

    if (!root || !activeLink) {
      setIndicatorStyle((style) => ({ ...style, opacity: 0 }));
      return undefined;
    }

    const updateIndicator = () => {
      const rootRect = root.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const inset = 10;

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${linkRect.left - rootRect.left + inset}px)`,
        width: `${Math.max(28, linkRect.width - inset * 2)}px`,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateIndicator) : null;
    resizeObserver?.observe(root);
    resizeObserver?.observe(activeLink);

    return () => {
      window.removeEventListener("resize", updateIndicator);
      resizeObserver?.disconnect();
    };
  }, [activeSection, lang]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
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
            <NavbarLogo />
            <span className="grid gap-0.5 leading-none">
              <strong className="text-[0.9rem] font-black tracking-wide text-[var(--text)] max-[560px]:text-[0.82rem] xs:text-[0.78rem]">{t.brandName}</strong>
              <small className="text-[0.62rem] text-[rgb(var(--muted-rgb)/1)] max-[560px]:hidden">{t.brandRole}</small>
            </span>
          </a>

          <div ref={linksRef} className="nav-links-shell" role="list">
            <span className="nav-active-indicator" style={indicatorStyle} aria-hidden="true" />
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a role="listitem" key={item.id} data-nav-id={item.id} className={cn("nav-link", isActive && "nav-link--active")} href={item.href} aria-current={isActive ? "page" : undefined}>
                  <span>{item.label[lang]}</span>
                </a>
              );
            })}
          </div>

          <div className="inline-flex items-center justify-end gap-2">
            <LanguageSwitcher lang={lang} setLang={setLang} label={t.switchLanguage} />

            <ResumeDownloadButton lang={lang} label={t.resume} variant="nav" />

            <button
              className="grid min-h-[39px] w-[39px] cursor-pointer place-items-center rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-[rgb(var(--text-rgb)/0.06)] text-[var(--text)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.06)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.42)] focus-visible:outline-none md:hidden"
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
      </header>

      <div id="mobile-menu" className={cn("mobile-menu-layer md:hidden", isMenuOpen && "is-open")} aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
        <button type="button" className="mobile-menu-backdrop" aria-label={t.close} onClick={closeMenu} />

        <aside className={cn("mobile-drawer", isRtl ? "mobile-drawer--rtl text-right" : "mobile-drawer--ltr text-left")} dir={dir} role="dialog" aria-modal="true" aria-label={t.mobileMenuTitle}>
          <div className="mobile-drawer-orb" aria-hidden="true" />

          <div className="relative flex items-start justify-between gap-4 text-[var(--text)]">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--accent-rgb)/0.09)]">
                <Sparkles aria-hidden="true" size={18} className="text-[var(--accent)] drop-shadow-[0_0_8px_rgb(var(--accent-rgb)/0.5)]" />
              </span>
              <div className="min-w-0">
                <strong className="block text-base font-black text-[var(--text)]">{t.mobileMenuTitle}</strong>
                <p className="mt-1 text-sm leading-6 text-[rgb(var(--text-rgb)/0.68)]">{t.mobileMenuSubtitle}</p>
              </div>
            </div>

            <button type="button" className="grid size-10 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--text-rgb)/0.09)] bg-[rgb(var(--text-rgb)/0.055)] text-[var(--text)] transition hover:border-[rgb(var(--accent-rgb)/0.34)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:outline-none" aria-label={t.close} onClick={closeMenu}>
              <X aria-hidden="true" size={19} />
            </button>
          </div>

          <div className="relative mt-8 grid gap-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <a key={item.id} className={cn("mobile-drawer-link", isMenuOpen && "is-visible", isActive && "is-active")} style={{ transitionDelay: isMenuOpen ? `${120 + index * 55}ms` : "0ms" }} href={item.href} aria-current={isActive ? "page" : undefined} onClick={closeMenu}>
                  <span>{item.label[lang]}</span>
                  <small className="text-xs font-black text-[rgb(var(--accent-rgb)/0.86)] [direction:ltr]">{String(index + 1).padStart(2, "0")}</small>
                </a>
              );
            })}
          </div>

          <div className="relative mt-6">
            <ResumeDownloadButton lang={lang} label={t.resume} variant="mobile" onDownloadEnd={closeMenu} />
          </div>
        </aside>
      </div>
    </>
  );
}
