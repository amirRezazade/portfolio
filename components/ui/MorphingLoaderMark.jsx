"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";

const MOTION_PATH = "M100 100 C85 78 75 69 58 71 C31 75 31 125 58 129 C75 131 87 117 100 100 C113 83 125 69 142 71 C169 75 169 125 142 129 C125 131 115 122 100 100";

const CODE_LEFT = [75, 70, 68, 78, 59, 89, 49, 100, 59, 111, 68, 122, 75, 130, 75, 130, 75, 130, 75, 130];

const CODE_RIGHT = [125, 70, 132, 78, 141, 89, 151, 100, 141, 111, 132, 122, 125, 130, 125, 130, 125, 130, 125, 130];

const INFINITY_LEFT = [100, 100, 85, 78, 75, 69, 58, 71, 31, 75, 31, 125, 58, 129, 75, 131, 87, 117, 100, 100];

const INFINITY_RIGHT = [100, 100, 113, 83, 125, 69, 142, 71, 169, 75, 169, 125, 142, 129, 125, 131, 115, 122, 100, 100];

const CODE_SLASH = [110, 66, 90, 134];
const SMALL_SLASH = [106, 89, 94, 111];

const pathData = (values) => `M ${values[0]} ${values[1]}
  C ${values[2]} ${values[3]}, ${values[4]} ${values[5]}, ${values[6]} ${values[7]}
  C ${values[8]} ${values[9]}, ${values[10]} ${values[11]}, ${values[12]} ${values[13]}
  C ${values[14]} ${values[15]}, ${values[16]} ${values[17]}, ${values[18]} ${values[19]}`;

const mix = (a, b, t) => a + (b - a) * t;
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const interpolateArray = (from, to, t) => from.map((value, index) => mix(value, to[index], t));

export default function MorphingLoaderMark({ shouldComplete, isExiting, onComplete, className }) {
  const reactId = useId().replace(/:/g, "");
  const ids = {
    codeGradient: `morphCodeGradient-${reactId}`,
    slashGradient: `morphSlashGradient-${reactId}`,
    markAura: `morphMarkAura-${reactId}`,
    ringGradient: `morphRingGradient-${reactId}`,
    blueGlow: `morphBlueGlow-${reactId}`,
    violetGlow: `morphVioletGlow-${reactId}`,
    wideGlow: `morphWideGlow-${reactId}`,
  };

  const apiRef = useRef(null);
  const completeRequestedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const leftShapeRef = useRef(null);
  const rightShapeRef = useRef(null);
  const leftGlowRef = useRef(null);
  const rightGlowRef = useRef(null);
  const codeSlashRef = useRef(null);
  const movingSlashRef = useRef(null);
  const movingSlashGlowRef = useRef(null);
  const shimmerRef = useRef(null);
  const motionPathRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let isMounted = true;
    let motionFrame = 0;
    let animationFrame = 0;
    let motionStartedAt = 0;
    let lastDistance = 0;
    let enteringPromise = null;
    let isFinishing = false;
    const timers = new Set();

    const leftShape = leftShapeRef.current;
    const rightShape = rightShapeRef.current;
    const leftGlow = leftGlowRef.current;
    const rightGlow = rightGlowRef.current;
    const codeSlash = codeSlashRef.current;
    const movingSlash = movingSlashRef.current;
    const movingSlashGlow = movingSlashGlowRef.current;
    const shimmer = shimmerRef.current;
    const motionPath = motionPathRef.current;

    if (!leftShape || !rightShape || !leftGlow || !rightGlow || !codeSlash || !movingSlash || !movingSlashGlow || !shimmer || !motionPath) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pathLength = motionPath.getTotalLength();
    const segmentLength = 34;
    const segmentPattern = `${segmentLength} ${pathLength - segmentLength}`;

    const wait = (ms) =>
      new Promise((resolve) => {
        const timer = window.setTimeout(() => {
          timers.delete(timer);
          resolve();
        }, ms);
        timers.add(timer);
      });

    const setShapes = (left, right) => {
      const leftD = pathData(left);
      const rightD = pathData(right);

      leftShape.setAttribute("d", leftD);
      rightShape.setAttribute("d", rightD);
      leftGlow.setAttribute("d", leftD);
      rightGlow.setAttribute("d", rightD);
    };

    const setLine = (element, values) => {
      element.setAttribute("x1", values[0]);
      element.setAttribute("y1", values[1]);
      element.setAttribute("x2", values[2]);
      element.setAttribute("y2", values[3]);
    };

    const setSegment = (distance) => {
      const offset = -distance;
      movingSlash.setAttribute("stroke-dashoffset", offset);
      movingSlashGlow.setAttribute("stroke-dashoffset", offset);
      lastDistance = ((distance % pathLength) + pathLength) % pathLength;
    };

    const setSegmentOpacity = (value) => {
      movingSlash.style.opacity = String(value);
      movingSlashGlow.style.opacity = String(value * 0.2);
    };

    const animate = (duration, draw) =>
      new Promise((resolve) => {
        const startedAt = performance.now();

        const frame = (now) => {
          if (!isMounted) {
            resolve();
            return;
          }

          const progress = Math.min((now - startedAt) / duration, 1);
          draw(easeInOutCubic(progress), progress);

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(frame);
          } else {
            resolve();
          }
        };

        animationFrame = window.requestAnimationFrame(frame);
      });

    const startSlashMotion = () => {
      window.cancelAnimationFrame(motionFrame);
      motionStartedAt = performance.now();
      const lapDuration = 1850;

      const move = (now) => {
        if (!isMounted || isFinishing) return;

        const progress = ((now - motionStartedAt) % lapDuration) / lapDuration;
        setSegment(progress * pathLength);
        motionFrame = window.requestAnimationFrame(move);
      };

      motionFrame = window.requestAnimationFrame(move);
    };

    const morphToInfinity = async () => {
      await wait(260);
      if (!isMounted || isFinishing) return;

      setSegment(0);

      await animate(900, (t) => {
        setShapes(interpolateArray(CODE_LEFT, INFINITY_LEFT, t), interpolateArray(CODE_RIGHT, INFINITY_RIGHT, t));

        setLine(codeSlash, interpolateArray(CODE_SLASH, SMALL_SLASH, t));
        const handoff = Math.max(0, Math.min(1, (t - 0.58) / 0.42));
        codeSlash.style.opacity = String(1 - handoff);
        setSegmentOpacity(handoff);
      });

      if (!isMounted || isFinishing) return;

      codeSlash.style.opacity = "0";
      setSegmentOpacity(1);
      shimmer.classList.add("is-active");
      startSlashMotion();
    };

    const returnToCode = async () => {
      if (isFinishing) return;
      isFinishing = true;

      if (enteringPromise) await enteringPromise;
      if (!isMounted) return;

      window.cancelAnimationFrame(motionFrame);
      shimmer.classList.remove("is-active");

      const landingStart = lastDistance;
      const remainingDistance = pathLength - landingStart;
      const landingDuration = Math.max(280, Math.min(680, (remainingDistance / pathLength) * 1850));

      await animate(landingDuration, (t) => {
        setSegment(mix(landingStart, pathLength, t));
      });

      if (!isMounted) return;

      setLine(codeSlash, SMALL_SLASH);
      codeSlash.style.opacity = "0";

      await animate(920, (t) => {
        setShapes(interpolateArray(INFINITY_LEFT, CODE_LEFT, t), interpolateArray(INFINITY_RIGHT, CODE_RIGHT, t));
        setLine(codeSlash, interpolateArray(SMALL_SLASH, CODE_SLASH, t));

        const handoff = Math.min(1, t / 0.42);
        setSegmentOpacity(1 - handoff);
        codeSlash.style.opacity = String(handoff);
      });

      if (!isMounted) return;

      setSegmentOpacity(0);
      codeSlash.style.opacity = "1";
      await wait(260);

      if (isMounted) {
        onCompleteRef.current?.();
      }
    };

    movingSlash.setAttribute("stroke-dasharray", segmentPattern);
    movingSlashGlow.setAttribute("stroke-dasharray", segmentPattern);
    setShapes(CODE_LEFT, CODE_RIGHT);
    setLine(codeSlash, CODE_SLASH);
    setSegment(0);
    setSegmentOpacity(0);

    if (prefersReducedMotion) {
      apiRef.current = {
        complete: () => onCompleteRef.current?.(),
      };

      if (completeRequestedRef.current) {
        apiRef.current.complete();
      }

      return () => {
        apiRef.current = null;
      };
    }

    apiRef.current = { complete: returnToCode };
    enteringPromise = morphToInfinity();

    if (completeRequestedRef.current) {
      returnToCode();
    }

    return () => {
      isMounted = false;
      apiRef.current = null;
      window.cancelAnimationFrame(motionFrame);
      window.cancelAnimationFrame(animationFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
    };
  }, []);

  useEffect(() => {
    if (!shouldComplete) return;

    completeRequestedRef.current = true;
    apiRef.current?.complete();
  }, [shouldComplete]);

  return (
    <svg className={cn("code-morph-loader__mark", isExiting && "is-exiting", className)} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={ids.codeGradient} x1="45" y1="60" x2="155" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--logo-cyan)" />
          <stop offset="0.44" stopColor="var(--secondary)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>

        <linearGradient id={ids.slashGradient} x1="88" y1="134" x2="112" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--logo-rose)" />
          <stop offset="0.54" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--text)" />
        </linearGradient>

        <radialGradient id={ids.markAura} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--logo-cyan)" stopOpacity="0.075" />
          <stop offset="0.48" stopColor="var(--logo-rose)" stopOpacity="0.04" />
          <stop offset="1" stopColor="var(--logo-rose)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id={ids.ringGradient} x1="32" y1="42" x2="168" y2="158" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--logo-cyan)" stopOpacity="0" />
          <stop offset="0.32" stopColor="var(--logo-cyan)" />
          <stop offset="0.68" stopColor="var(--logo-rose)" />
          <stop offset="1" stopColor="var(--logo-amber)" stopOpacity="0" />
        </linearGradient>

        <filter id={ids.blueGlow} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={ids.violetGlow} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={ids.wideGlow} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <circle className="code-morph-loader__aura" cx="100" cy="100" r="86" fill={`url(#${ids.markAura})`} />
      <circle className="code-morph-loader__micro-ring" cx="100" cy="100" r="73" stroke={`url(#${ids.ringGradient})`} />

      <path ref={motionPathRef} d={MOTION_PATH} fill="none" stroke="none" />

      <path ref={leftGlowRef} className="code-morph-loader__symbol-glow" stroke="var(--logo-cyan)" filter={`url(#${ids.wideGlow})`} />
      <path ref={rightGlowRef} className="code-morph-loader__symbol-glow" stroke="var(--logo-rose)" filter={`url(#${ids.wideGlow})`} />

      <path ref={shimmerRef} className="code-morph-loader__infinity-shimmer" d={MOTION_PATH} filter={`url(#${ids.blueGlow})`} />

      <path ref={leftShapeRef} className="code-morph-loader__symbol-stroke" d={pathData(CODE_LEFT)} stroke={`url(#${ids.codeGradient})`} filter={`url(#${ids.blueGlow})`} />
      <path ref={rightShapeRef} className="code-morph-loader__symbol-stroke" d={pathData(CODE_RIGHT)} stroke={`url(#${ids.codeGradient})`} filter={`url(#${ids.blueGlow})`} />

      <path ref={movingSlashGlowRef} className="code-morph-loader__moving-slash-glow" d={MOTION_PATH} stroke="var(--accent)" filter={`url(#${ids.wideGlow})`} />
      <path ref={movingSlashRef} className="code-morph-loader__moving-slash" d={MOTION_PATH} stroke={`url(#${ids.slashGradient})`} filter={`url(#${ids.violetGlow})`} />

      <line ref={codeSlashRef} className="code-morph-loader__code-slash" x1={CODE_SLASH[0]} y1={CODE_SLASH[1]} x2={CODE_SLASH[2]} y2={CODE_SLASH[3]} stroke={`url(#${ids.slashGradient})`} filter={`url(#${ids.violetGlow})`} />
    </svg>
  );
}
