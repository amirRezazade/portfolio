"use client";
import { useEffect, useState } from "react";

import "./loading.css";
export default function Loader(params) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 1500)); // حداقل ۱.۵ ثانیه
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    Promise.all([minTime, pageLoad]).then(() => setLoading(false));
  }, []);

  if (!loading) return null;

  return (
    <div id="loader" className="centered fixed top-0 left-0 size-full bg-black z-199 transition-[opacity,visibilty]">
      <div className="ai-matrix-loader">
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="digit">1</div>
        <div className="digit">0</div>
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="digit">1</div>
        <div className="glow"></div>
      </div>
    </div>
  );
}
