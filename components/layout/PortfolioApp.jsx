"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Hero from ".//hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import SmoothScroll from "../ui/SmoothScroll";
import SpaceBackground from "../ui/SpaceBackground";
import CodeMarkLogo from "../layout/navbar/CodeMarkLogo";
import { getLanguageDirection, languageStorageKey, normalizeLanguage } from "@/lib/language";

import { cn } from "../../lib/cn";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const languageCookieMaxAge = 60 * 60 * 24 * 365;

function applyDocumentLanguage(language) {
  document.documentElement.lang = language;
  document.documentElement.dir = getLanguageDirection(language);
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Ignore storage failures so language switching still works in private modes.
  }

  document.cookie = `${languageStorageKey}=${language}; Path=/; Max-Age=${languageCookieMaxAge}; SameSite=Lax`;
}

export default function PortfolioApp({ initialLang }) {
  const [lang, setLang] = useState(() => normalizeLanguage(initialLang));
  const [hasMounted, setHasMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    applyDocumentLanguage(lang);
    setHasMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    applyDocumentLanguage(lang);

    if (hasMounted) {
      persistLanguage(lang);
    }
  }, [hasMounted, lang]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isReady) {
      return undefined;
    }

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [isReady]);

  return (
    <>
      <SmoothScroll />
      <SpaceBackground lang={lang} />
      <CosmicLoader isReady={isReady} />
      <Navbar lang={lang} setLang={setLang} isReady={isReady} />

      <main id="main" className="relative z-10 overflow-x-hidden">
        <Hero lang={lang} isReady={isReady} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </>
  );
}

function CosmicLoader({ isReady }) {
  return (
    <div className={cn("split-loader", isReady && "is-ry")} aria-hidden={isReady}>
      <div className="split-loader-panel split-loader-panel--left">
        <div className="split-loader-scene split-loader-scene--left">
          <div className="split-loader-logo">
            <CodeMarkLogo variant="split" title="" />
          </div>
        </div>
      </div>

      <div className="split-loader-panel split-loader-panel--right">
        <div className="split-loader-scene split-loader-scene--right">
          <div className="split-loader-logo">
            <CodeMarkLogo variant="split" title="" />
          </div>
        </div>
      </div>
    </div>
  );
}
