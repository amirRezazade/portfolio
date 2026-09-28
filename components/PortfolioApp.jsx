"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import SmoothScroll from "./SmoothScroll";
import SpaceBackground from "./SpaceBackground";
import { dictionary } from "../data/navigation";
import { cn } from "../lib/cn";

export default function PortfolioApp() {
  const [lang, setLang] = useState("fa");
  const [isReady, setIsReady] = useState(false);
  const t = dictionary[lang];

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <SmoothScroll />
      <SpaceBackground lang={lang} />
      <CosmicLoader isReady={isReady} lang={lang} />
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

function CosmicLoader({ isReady, lang }) {
  return (
    <div className={cn("fixed inset-0 z-[999] grid place-items-center content-center gap-6 bg-[radial-gradient(circle_at_50%_45%,rgb(var(--accent-rgb)/0.18),transparent_28%),radial-gradient(circle_at_50%_55%,rgb(var(--secondary-rgb)/0.1),transparent_36%),var(--bg)] transition-all duration-700 ease-out", isReady ? "pointer-events-none invisible scale-105 opacity-0" : "visible scale-100 opacity-100")} aria-hidden={isReady}>
      <div className="relative size-[92px] rounded-full border border-[rgb(var(--text-rgb)/0.1)]">
        <span className="absolute inset-0 animate-spin rounded-full border border-[rgb(var(--secondary-rgb)/0.35)] after:absolute after:left-1/2 after:top-2 after:-ml-[3.5px] after:size-[7px] after:rounded-full after:bg-[var(--text)] after:shadow-[0_0_16px_var(--text)]" />
        <span className="absolute inset-0 rotate-[60deg] animate-spin rounded-full border border-[rgb(var(--primary-rgb)/0.45)] after:absolute after:left-1/2 after:top-2 after:-ml-[3.5px] after:size-[7px] after:rounded-full after:bg-[var(--text)] after:shadow-[0_0_16px_var(--text)] [animation-duration:2.1s]" />
        <span className="absolute inset-0 -rotate-[60deg] animate-spin rounded-full border border-[rgb(var(--secondary-rgb)/0.25)] after:absolute after:left-1/2 after:top-2 after:-ml-[3.5px] after:size-[7px] after:rounded-full after:bg-[var(--text)] after:shadow-[0_0_16px_var(--text)] [animation-duration:2.7s]" />
        <span className="absolute inset-[30px] rounded-full bg-gradient-to-br from-[var(--text)] via-[var(--accent)] to-[var(--primary)] shadow-[0_0_30px_rgb(var(--accent-rgb)/0.42)]" />
      </div>
      <p className="m-0 text-sm text-[rgb(var(--text-rgb)/0.75)]">{lang === "fa" ? "در حال آماده‌سازی مدار..." : "Preparing the orbit..."}</p>
    </div>
  );
}
