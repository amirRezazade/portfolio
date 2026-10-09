"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export default function SpaceBackground({ lang }) {
  const isRtl = lang === "fa";
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return <div className={cn("pointer-events-none fixed inset-0 z-0 bg-[var(--bg)] overflow-hidden before:absolute before:inset-0 xs:before:bg-[url(/media/mobile-bg.webp)] before:bg-[url(/media/poster.webp)] before:bg-cover xs:before:bg-right before:bg-center before:bg-no-repeat  after:absolute after:inset-0 after:bg-black/20", isRtl && "before:-scale-x-100")} aria-hidden="true"></div>;
}
