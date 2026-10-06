"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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
import Footer from "./footer/Footer";
import MorphingLoaderMark from "../ui/MorphingLoaderMark";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const languageCookieMaxAge = 60 * 60 * 24 * 365;
const infinityMinMs = 1200;
const loaderExitMs = 1050;
const postLoaderDelayMs = 200;

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
  const [isLogoReady, setIsLogoReady] = useState(false);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [isLoaderMounted, setIsLoaderMounted] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

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
    let minimumInfinityTimeDone = false;
    let contentReady = document.readyState === "complete";
    let hasRequestedCompletion = false;

    const completeLoaderWhenReady = () => {
      if (!minimumInfinityTimeDone || !contentReady || hasRequestedCompletion) return;

      hasRequestedCompletion = true;
      setIsLogoReady(true);
    };

    const introTimer = window.setTimeout(() => {
      minimumInfinityTimeDone = true;
      completeLoaderWhenReady();
    }, infinityMinMs);

    const handleLoad = () => {
      contentReady = true;
      completeLoaderWhenReady();
    };

    if (contentReady) {
      completeLoaderWhenReady();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(introTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoaderExiting) return undefined;

    const removeTimer = window.setTimeout(() => setIsLoaderMounted(false), loaderExitMs);
    const readyTimer = window.setTimeout(() => setIsPageReady(true), loaderExitMs + postLoaderDelayMs);

    return () => {
      window.clearTimeout(removeTimer);
      window.clearTimeout(readyTimer);
    };
  }, [isLoaderExiting]);

  const handleLoaderMarkComplete = useCallback(() => {
    setIsLoaderExiting((value) => value || true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const lockClass = "site-loading";

    if (isPageReady) {
      html.classList.remove(lockClass);
      body.classList.remove(lockClass);
      return undefined;
    }

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;

    html.classList.add(lockClass);
    body.classList.add(lockClass);
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
      html.classList.remove(lockClass);
      body.classList.remove(lockClass);
    };
  }, [isPageReady]);

  return (
    <>
      <SmoothScroll />
      <SpaceBackground lang={lang} />
      {isLoaderMounted && <CosmicLoader shouldComplete={isLogoReady} isExiting={isLoaderExiting} lang={lang} onMarkComplete={handleLoaderMarkComplete} />}
      <Navbar lang={lang} setLang={setLang} isReady={isPageReady} />

      <main id="main" className="relative z-10 overflow-x-hidden">
        <Hero lang={lang} isReady={isPageReady} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  );
}

function CosmicLoader({ shouldComplete, isExiting, lang, onMarkComplete }) {
  const dir = getLanguageDirection(lang);

  return (
    <div className={cn("code-morph-loader", isExiting && "is-exiting")} dir={dir} role="status" aria-live="polite" aria-label={lang === "fa" ? "در حال آماده‌سازی سایت" : "Loading the site"} aria-hidden={isExiting}>
      <div className="code-morph-loader__panel code-morph-loader__panel--left" />
      <div className="code-morph-loader__panel code-morph-loader__panel--right" />

      <div className="code-morph-loader__stage">
        <MorphingLoaderMark shouldComplete={shouldComplete} isExiting={isExiting} onComplete={onMarkComplete} />
      </div>
    </div>
  );
}
