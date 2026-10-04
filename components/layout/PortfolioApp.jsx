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
import Footer from "./footer/Footer";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const languageCookieMaxAge = 60 * 60 * 24 * 365;
const infinityMinMs = 1200;
const infinityToLogoMs = 1080;
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
    let hasStartedLogoTransform = false;
    let transformTimer;
    let removeTimer;
    let readyTimer;

    const startLogoTransformWhenReady = () => {
      if (!minimumInfinityTimeDone || !contentReady || hasStartedLogoTransform) return;

      hasStartedLogoTransform = true;
      setIsLogoReady(true);

      transformTimer = window.setTimeout(() => {
        setIsLoaderExiting(true);
        removeTimer = window.setTimeout(() => setIsLoaderMounted(false), loaderExitMs);
        readyTimer = window.setTimeout(() => setIsPageReady(true), loaderExitMs + postLoaderDelayMs);
      }, infinityToLogoMs);
    };

    const introTimer = window.setTimeout(() => {
      minimumInfinityTimeDone = true;
      startLogoTransformWhenReady();
    }, infinityMinMs);

    const handleLoad = () => {
      contentReady = true;
      startLogoTransformWhenReady();
    };

    if (contentReady) {
      startLogoTransformWhenReady();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(transformTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(readyTimer);
      window.removeEventListener("load", handleLoad);
    };
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
      {isLoaderMounted && <CosmicLoader isLogoReady={isLogoReady} isExiting={isLoaderExiting} lang={lang} />}
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

function CosmicLoader({ isLogoReady, isExiting, lang }) {
  const dir = getLanguageDirection(lang);

  return (
    <div className={cn("infinity-loader", isLogoReady && "is-logo-ready", isExiting && "is-exiting")} dir={dir} aria-hidden="true">
      <div className="infinity-loader__panel infinity-loader__panel--left">
        <div className="infinity-loader__scene infinity-loader__scene--left">
          <div className="infinity-loader__logo">
            <CodeMarkLogo variant="split" title="" />
          </div>
        </div>
      </div>

      <div className="infinity-loader__panel infinity-loader__panel--right">
        <div className="infinity-loader__scene infinity-loader__scene--right">
          <div className="infinity-loader__logo">
            <CodeMarkLogo variant="split" title="" />
          </div>
        </div>
      </div>
    </div>
  );
}
