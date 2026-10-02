"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/cn";

export default function SpaceBackground({ lang }) {
  const isRtl = lang === "fa";
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#273266]" aria-hidden="true">
      <video ref={videoRef} className={cn("absolute inset-0 size-full scale-105 object-cover object-center brightness-[0.82] contrast-[1.08] saturate-[1.12]", isRtl && "-scale-x-105")} autoPlay muted loop playsInline preload="metadata" poster="/media/poster.png">
        <source src="/media/earth-in-space.webm" type="video/mp4" />
      </video>

      <div className={cn("absolute inset-0", isRtl ? "bg-[linear-gradient(90deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.28)_42%,rgba(5,8,22,0.92)_100%)]" : "bg-[linear-gradient(90deg,rgba(5,8,22,0.92)_0%,rgba(5,8,22,0.28)_58%,rgba(5,8,22,0.08)_100%)]")} />
    </div>
  );
}
