"use client";

import { useEffect, useRef, useState } from "react";
import { Check, FileDown } from "lucide-react";
import { cn } from "@/lib/cn";
import "./resumeDownloadButton.css";

const variantClasses = {
  hero: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--surface-rgb)/0.34)] px-5 text-[0.92rem] font-extrabold text-[rgb(var(--text-rgb)/0.85)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.35)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:outline-none max-sm:flex-1 max-sm:basis-full",
  nav: "cosmic-button hidden min-h-10 items-center justify-center rounded-full border w-[110px] text-[0.84rem] font-extrabold lg:inline-flex",
  mobile: "cosmic-button inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[18px] border px-4 font-black",
};

const resumeFile = "/Amir-Rezazade-FrontEnd-Developer.pdf";
const resumeFileName = "AmirRezazade.pdf";

export default function ResumeDownloadButton({ lang, label, variant = "hero", className, onDownloadEnd }) {
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const resetTimerRef = useRef(null);
  const revokeTimerRef = useRef(null);

  const loadingLabel = lang === "fa" ? (variant === "nav" ? "آماده‌سازی..." : "در حال آماده‌سازی رزومه...") : variant === "nav" ? "Preparing..." : "Preparing resume...";
  const successLabel = lang === "fa" ? "دانلود شد" : "Downloaded";
  const isBusy = status !== "idle";

  useEffect(() => {
    return () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(resetTimerRef.current);
      window.clearTimeout(revokeTimerRef.current);
    };
  }, []);

  const startSoftProgress = () => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 92) return value;
        return Math.min(92, value + Math.max(1, Math.round((92 - value) * 0.08)));
      });
    }, 120);
  };

  const triggerDownload = (blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = resumeFileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();

    revokeTimerRef.current = window.setTimeout(() => URL.revokeObjectURL(url), 1200);
  };

  const fallbackDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = resumeFileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const resetButton = () => {
    resetTimerRef.current = window.setTimeout(() => {
      setStatus("idle");
      setProgress(0);
      onDownloadEnd?.();
    }, 950);
  };

  const handleClick = async () => {
    if (isBusy) return;

    setStatus("loading");
    setProgress(10);
    startSoftProgress();

    try {
      const response = await fetch(resumeFile, { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Resume download failed");
      }

      const contentLength = Number(response.headers.get("Content-Length"));

      if (response.body && contentLength > 0) {
        const reader = response.body.getReader();
        const chunks = [];
        let receivedLength = 0;

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          chunks.push(value);
          receivedLength += value.length;
          setProgress(Math.min(96, Math.round((receivedLength / contentLength) * 96)));
        }

        triggerDownload(new Blob(chunks, { type: "application/pdf" }));
      } else {
        const blob = await response.blob();
        setProgress(96);
        triggerDownload(blob);
      }
    } catch {
      fallbackDownload();
    } finally {
      window.clearInterval(intervalRef.current);
      setProgress(100);
      setStatus("success");
      resetButton();
    }
  };

  return (
    <button type="button" className={cn("resume-download-btn", variantClasses[variant], status === "loading" && "is-loading", status === "success" && "is-success", isBusy && "scale-[0.98] cursor-wait", className)} onClick={handleClick} disabled={isBusy} aria-busy={status === "loading"} aria-live="polite" style={{ "--download-progress": `${progress}%` }}>
      <span className="resume-download-glow " aria-hidden="true" />
      <span className="resume-download-progress" aria-hidden="true" />
      <span className="resume-download-icon" aria-hidden="true">
        {status === "success" ? <Check size={variant === "nav" ? 16 : 17} /> : <FileDown size={variant === "nav" ? 16 : 17} />}
        <span className="resume-download-orbit" />
      </span>
      <span className="resume-download-label px-2">{label}</span>
    </button>
  );
}
