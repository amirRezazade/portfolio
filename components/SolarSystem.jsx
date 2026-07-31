"use client";
import React from "react";
// import { Orbit as OrbitIcon } from "lucide-react";

/**
 * ============================================================================
 * DEFAULT SVG LOGO ICONS
 * ============================================================================
 */
const DefaultIcons = {
  javaScript: (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 128 128">
      <path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
      ></path>
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" stroke="#fff" strokeWidth="6" />
      <path d="M149.508 157.52L69.142 54H54v72h14.4V69.412l67.24 87.054a89.4 89.4 0 0013.868-1.046zM111.6 54h14.4v72h-14.4z" fill="#fff" />
    </svg>
  ),
  figma: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
      <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
      <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
      <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
      <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
      <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
    </svg>
  ),
  typescript: (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 128 128">
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  ),
  tailwind: (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 32 32">
      <path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"></path>
    </svg>
  ),
  redux: (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 128 128">
      <path
        fill="#764abc"
        d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.7 39.7 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.5 50.5 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.5 41.5 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.6 43.6 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.3 7.3 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.7 43.7 0 0 0-9.64 25.25a59.6 59.6 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
      ></path>
    </svg>
  ),
};

/**
 * ============================================================================
 * DEFAULT ORBITS CONFIGURATION
 * ============================================================================
 */
const DEFAULT_ORBITS = [
  {
    id: "inner",
    name: "Inner Ring",
    radiusClass: "var(--radius-inner)",
    radiusPx: 175,
    speed: 20,
    items: [
      { id: "javaScript", label: "JavaScript", color: "#f7df1e", svg: DefaultIcons.javaScript },
      { id: "react", label: "React", color: "#61DAFB", svg: DefaultIcons.react },
    ],
  },
  {
    id: "mid",
    name: "Middle Ring",
    radiusClass: "var(--radius-mid)",
    radiusPx: 285,
    speed: 32,
    items: [
      { id: "nextjs", label: "Next.js", color: "#ffffff", svg: DefaultIcons.nextjs },
      { id: "typescript", label: "TypeScript", color: "#3178C6", svg: DefaultIcons.typescript },
      { id: "tailwind", label: "Tailwind", color: "#44a8b3", svg: DefaultIcons.tailwind },
    ],
  },
  {
    id: "outer",
    name: "Outer Ring",
    radiusClass: "var(--radius-outer)",
    radiusPx: 395,
    speed: 48,
    items: [
      { id: "redux", label: "Redux", color: "#764abc", svg: DefaultIcons.redux },
      { id: "figma", label: "Figma", color: "#ff7043", svg: DefaultIcons.figma },
    ],
  },
];

const SolarSystem = React.forwardRef(({ centerLogo, centerLogoAlt = "Core Engine", orbits = DEFAULT_ORBITS, isPaused = false, speedMultiplier = 1, className, ...props }, ref) => {
  const dustItems = [
    { delay: "-4s", radius: "165px", color: "#00f5d4" },
    { delay: "-11s", radius: "260px", color: "#a855f7" },
    { delay: "-19s", radius: "340px", color: "#3b82f6" },
    { delay: "-28s", radius: "395px", color: "#00f5d4" },
    { delay: "-7s", radius: "200px", color: "#ec4899" },
    { delay: "-15s", radius: "365px", color: "#eab308" },
    { delay: "-23s", radius: "430px", color: "#a855f7" },
  ];

  return (
    <div
      ref={ref}
      // من تابع cn رو حذف کردم و از بک‌تیک استفاده کردم که وابسته به فایل‌های دیگه نباشی
      className={`relative flex items-center justify-center w-full max-w-235 h-80 md:h-[450px] perspective-[1200px] select-none overflow-visible ${className || ""}`}
      {...props}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --radius-inner: 175px;
            --radius-mid: 285px;
            --radius-outer: 395px;
          }
          @media (max-width: 768px) {
            :root {
              --radius-inner: 100px;
              --radius-mid: 165px;
              --radius-outer: 230px;
            }
          }
          @media (max-width: 480px) {
            :root {
              --radius-inner: 70px;
              --radius-mid: 115px;
              --radius-outer: 160px;
            }
          }
          @keyframes custom-orbitMove {
            0% { transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius)); }
            100% { transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius)); }
          }
          @keyframes custom-billboardCancel {
            0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg); }
            100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg); }
          }
          @keyframes custom-sun-pulse {
            0% { transform: scale(0.9); opacity: 0.7; }
            100% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes custom-spin-clockwise {
            0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
          }
          @keyframes custom-spin-counter {
            0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
          }
          .animate-custom-orbit {
            animation: custom-orbitMove var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-billboard {
            animation: custom-billboardCancel var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-sun-pulse {
            animation: custom-sun-pulse 4s ease-in-out infinite alternate;
          }
          .animate-custom-spin-cw {
            animation: custom-spin-clockwise 20s linear infinite;
          }
          .animate-custom-spin-ccw {
            animation: custom-spin-counter 30s linear infinite;
          }
          .orbit-logo-card {
            position: absolute;
            left: 50%;
            top: 50%;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0.45rem 0.95rem;
            background: rgba(10, 10, 12, 0.65);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 100px;
            font-weight: 600;
            color: #ffffff;
            white-space: nowrap;
            user-select: none;
            cursor: pointer;
            pointer-events: auto;
            transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
            
          }
            .orbit-node {
  pointer-events: auto;
}

.orbit-laser {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.orbit-icon {
  transition: transform 0.3s ease;
}

.orbit-logo-card {
  border-color: rgba(255, 255, 255, 0.08);
  will-change: transform;
}

/* کل hover با CSS */
.orbit-node:hover .orbit-laser {
  opacity: 1;
}

.orbit-node:hover .orbit-logo-card {
  border-color: var(--hover-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6), 0 0 15px var(--hover-color);
  scale: 1.05;
}

.orbit-node:hover .orbit-icon {
  transform: scale(1.1);
}
        `,
        }}
      />

      <div className="absolute w-90 h-90 md:w-235 md:h-235 flex items-center justify-center" style={{ transform: "rotateX(65deg) rotateY(-10deg)", transformStyle: "preserve-3d" }}>
        <div className="absolute w-25 h-25 md:w-32.5 md:h-32.5 flex items-center justify-center z-20 pointer-events-none" style={{ transform: "rotateY(10deg) rotateX(-65deg)", transformStyle: "preserve-3d" }}>
          <div className="absolute w-22.5 h-22.5 md:w-30 md:h-30 rounded-full filter blur-md animate-custom-sun-pulse z-10 bg-teal-500/20" />

          <div className="w-12 h-12 md:w-18 md:h-18 flex justify-center items-center rounded-full border-2 border-purple-500/40 shadow-[0_0_30px_rgba(124, 20, 184, 0.3)] z-20 bg-zinc-950 p-2 md:p-3 relative">
            <img src="./images/code.png" alt="code" width={25} height={25} />
          </div>

          <div className="absolute w-27.5 h-27.5 md:w-35 md:h-35 rounded-full border border-dashed border-purple-500/20 animate-custom-spin-cw pointer-events-none" />
          <div className="absolute w-37.5 h-37.5 md:w-46.25 md:h-46.25 rounded-full border border-dashed border-purple-500/10 animate-custom-spin-ccw pointer-events-none" />
        </div>

        {dustItems.map((dust, idx) => (
          <div
            key={idx}
            className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full opacity-40 pointer-events-none animate-custom-orbit"
            style={{
              background: dust.color,
              boxShadow: `0 0 6px ${dust.color}`,
              animationDelay: dust.delay,
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: `${24 / speedMultiplier}s`,
              "--orbit-radius": dust.radius,
              "--orbit-duration": `${24 / speedMultiplier}s`,
              "--orbit-play-state": isPaused ? "paused" : "running",
            }}
          />
        ))}

        {orbits.map((orbit) => {
          return (
            <React.Fragment key={orbit.id}>
              <div
                className="absolute rounded-full border border-dashed border-zinc-700/60 pointer-events-none"
                style={{
                  width: `calc(2 * ${orbit.radiusClass})`,
                  height: `calc(2 * ${orbit.radiusClass})`,
                  boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.01), 0 0 25px rgba(255, 255, 255, 0.01)",
                  "--orbit-radius": orbit.radiusClass,
                }}
              />

              {orbit.items.map((item, idx, arr) => {
                const delayValue = -(orbit.speed / arr.length) * idx;
                const durationValue = orbit.speed / speedMultiplier;

                return (
                  <div
                    key={item.id}
                    className="orbit-node absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none animate-custom-orbit "
                    style={{
                      animationDelay: `${delayValue}s`,
                      animationDuration: `${durationValue}s`,
                      animationPlayState: isPaused ? "paused" : "running",
                      "--orbit-radius": orbit.radiusClass,
                      "--orbit-duration": `${durationValue}s`,
                      "--orbit-play-state": isPaused ? "paused" : "running",
                      "--hover-color": item.color,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="orbit-laser absolute right-0 top-1/2 h-[1.5px] origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
                      style={{
                        width: orbit.radiusClass,
                        background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
                        boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
                      }}
                    />

                    <div
                      className="orbit-logo-card animate-custom-billboard "
                      style={{
                        animationDelay: `${delayValue}s`,
                        animationDuration: `${durationValue}s`,
                        "--orbit-duration": `${durationValue}s`,
                      }}
                    >
                      <span
                        className="orbit-icon transition-transform duration-300 "
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.svg}
                      </span>
                      <span className="text-[11px] md:text-[13px] tracking-tight hidden lg:inline-block">{item.label}</span>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});

SolarSystem.displayName = "SolarSystem";

export default SolarSystem;
