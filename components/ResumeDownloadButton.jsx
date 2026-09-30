'use client';

import { useEffect, useRef, useState } from 'react';
import { FileDown, LoaderCircle } from 'lucide-react';
import { cn } from '../lib/cn';

const variantClasses = {
  hero: 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--surface-rgb)/0.34)] px-5 text-[0.92rem] font-extrabold text-[rgb(var(--text-rgb)/0.85)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.35)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:outline-none max-sm:flex-1 max-sm:basis-full',
  nav: 'hidden min-h-10 items-center gap-2 rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.82)] to-[rgb(var(--accent-rgb)/0.46)] px-3.5 text-[0.84rem] font-extrabold text-[var(--text)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.06)] transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:border-[rgb(var(--accent-rgb)/0.42)] focus-visible:outline-none lg:inline-flex',
  mobile: 'inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[18px] border border-[rgb(var(--text-rgb)/0.1)] bg-gradient-to-br from-[rgb(var(--primary-rgb)/0.82)] to-[rgb(var(--accent-rgb)/0.46)] px-4 font-black text-[var(--text)] transition-all',
};

export default function ResumeDownloadButton({ lang, label, variant = 'hero', className, onDownloadEnd }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const timerRef = useRef(null);
  const downloadingLabel = lang === 'fa' ? (variant === 'nav' ? 'دانلود...' : 'در حال دانلود...') : variant === 'nav' ? 'Downloading...' : 'Downloading...';

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setIsDownloading(true);

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsDownloading(false);
      onDownloadEnd?.();
    }, 1700);
  };

  return (
    <a
      className={cn(variantClasses[variant], isDownloading && 'pointer-events-none scale-[0.98] opacity-90', className)}
      href="/AmirRezazade.pdf"
      download
      onClick={handleClick}
      aria-busy={isDownloading}
      aria-live="polite"
    >
      {isDownloading ? (
        <LoaderCircle aria-hidden="true" size={variant === 'nav' ? 16 : 17} className="animate-spin" />
      ) : (
        <FileDown aria-hidden="true" size={variant === 'nav' ? 16 : 17} />
      )}
      <span>{isDownloading ? downloadingLabel : label}</span>
    </a>
  );
}
