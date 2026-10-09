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
import { getLanguageDirection, languageStorageKey, normalizeLanguage } from "@/lib/language";

import { cn } from "../../lib/cn";
import Footer from "./footer/Footer";
import CodeMarkLogo from "./navbar/CodeMarkLogo";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const languageCookieMaxAge = 60 * 60 * 24 * 365;
const firstVisitMinMs = 780;
const repeatVisitMinMs = 420;
const visitFlagKey = "amir-portfolio-visited";

function readIsRepeatVisit() {
  try {
    return window.sessionStorage.getItem(visitFlagKey) === "1";
  } catch {
    return false;
  }
}

function markVisited() {
  try {
    window.sessionStorage.setItem(visitFlagKey, "1");
  } catch {
    // Ignore storage failures; the loader simply uses its default timing.
  }
}
const completeHoldMs = 260;
const loaderExitMs = 700;
const pageRevealAtMs = 240;
const readinessTimeoutMs = 5000;

function waitForEvent(target, event) {
  return new Promise((resolve) => {
    target.addEventListener(event, resolve, { once: true });
  });
}

function waitForBackgroundImage() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const src = isMobile ? "/media/mobile-bg.webp" : "/media/poster.webp";
  const image = new Image();
  image.src = src;

  if (image.complete) return Promise.resolve();

  return Promise.race([waitForEvent(image, "load"), waitForEvent(image, "error")]);
}

function waitForRealReadiness() {
  const tasks = [];

  if (document.readyState !== "complete") {
    tasks.push(waitForEvent(window, "load"));
  }

  if (document.fonts?.ready) {
    tasks.push(document.fonts.ready.catch(() => undefined));
  }

  tasks.push(waitForBackgroundImage());

  return Promise.all(tasks);
}

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
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
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
    let isActive = true;
    let minimumTimeDone = false;
    let contentReady = false;
    let hasRequestedCompletion = false;

    const completeLoaderWhenReady = () => {
      if (!isActive || !minimumTimeDone || !contentReady || hasRequestedCompletion) return;

      hasRequestedCompletion = true;
      setIsLoaderComplete(true);
    };

    const markContentReady = () => {
      contentReady = true;
      completeLoaderWhenReady();
    };

    const minimumVisibleMs = readIsRepeatVisit() ? repeatVisitMinMs : firstVisitMinMs;
    markVisited();

    const introTimer = window.setTimeout(() => {
      minimumTimeDone = true;
      completeLoaderWhenReady();
    }, minimumVisibleMs);

    const safetyTimer = window.setTimeout(markContentReady, readinessTimeoutMs);

    waitForRealReadiness().then(() => {
      if (!isActive) return;
      markContentReady();
    });

    return () => {
      isActive = false;
      window.clearTimeout(introTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoaderComplete) return undefined;

    const exitTimer = window.setTimeout(() => setIsLoaderExiting(true), completeHoldMs);

    return () => window.clearTimeout(exitTimer);
  }, [isLoaderComplete]);

  useEffect(() => {
    if (!isLoaderExiting) return undefined;

    const removeTimer = window.setTimeout(() => setIsLoaderMounted(false), loaderExitMs);
    const readyTimer = window.setTimeout(() => setIsPageReady(true), pageRevealAtMs);

    return () => {
      window.clearTimeout(removeTimer);
      window.clearTimeout(readyTimer);
    };
  }, [isLoaderExiting]);

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
      {isLoaderMounted && <CosmicLoader isComplete={isLoaderComplete} isExiting={isLoaderExiting} lang={lang} />}
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

function CosmicLoader({ isComplete, isExiting, lang }) {
  const dir = getLanguageDirection(lang);

  return (
    <div className={cn("code-morph-loader", isComplete && "is-complete", isExiting && "is-exiting")} dir={dir} role="status" aria-live="polite" aria-label={lang === "fa" ? "در حال آماده‌سازی سایت" : "Loading the site"} aria-hidden={isExiting}>
      <div className="code-morph-loader__panel code-morph-loader__panel--left" />
      <div className="code-morph-loader__panel code-morph-loader__panel--right" />

      <div className="code-morph-loader__stage">
        <CodeMarkLogo variant="loader" title="" />
        <span className="code-morph-loader__bar" aria-hidden="true" />
      </div>
    </div>
  );
}
