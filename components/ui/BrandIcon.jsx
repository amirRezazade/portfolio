"use client";

import { Code2, Gauge, Layers3 } from "lucide-react";
import { SiBootstrap, SiCss, SiGit, SiGithub, SiGmail, SiHtml5, SiJavascript, SiNetlify, SiNextdotjs, SiNpm, SiReact, SiTailwindcss, SiTelegram, SiVercel } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function ApiIcon({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#85ea2d" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cloud-computing">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
      <path d="M12 16v5" />
      <path d="M16 16v4a1 1 0 0 0 1 1h4" />
      <path d="M8 16v4a1 1 0 0 1 -1 1h-4" />
    </svg>
  );
}

function ReactRouterIcon({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 140" className={className} style={style} aria-hidden="true" focusable="false" {...props}>
      <path fill="var(--brand-react-router-base)" d="M78.066 92.588c12.818 0 23.209-10.391 23.209-23.21c0-12.817-10.391-23.208-23.21-23.208c-12.817 0-23.208 10.39-23.208 23.209s10.391 23.209 23.209 23.209m-54.857 46.417c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.391-23.208-23.21-23.208C10.392 92.588 0 102.978 0 115.796s10.39 23.21 23.209 23.21m209.582 0c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.39-23.208-23.209-23.208s-23.209 10.39-23.209 23.208s10.391 23.21 23.21 23.21" />
      <path
        fill="var(--brand-react-router)"
        d="M156.565 70.357c-.742-7.754-1.12-14.208-7.06-18.744c-7.522-5.744-16.044-2.017-26.54-5.806C112.65 43.312 105 34.155 105 23.24C105 10.405 115.578 0 128.626 0c9.665 0 17.974 5.707 21.634 13.883c5.601 10.64 1.96 21.467 8.998 26.921c8.333 6.458 19.568 1.729 32.104 7.848a23.6 23.6 0 0 1 9.84 8.425A22.86 22.86 0 0 1 205 69.718c0 10.915-7.65 20.073-17.964 22.568c-10.497 3.789-19.019.062-26.541 5.806c-8.46 6.46-3.931 17.267-10.826 28.682c-3.913 7.518-11.867 12.663-21.043 12.663c-13.048 0-23.626-10.405-23.626-23.24c0-9.323 5.582-17.364 13.638-21.066c12.536-6.12 23.77-1.39 32.104-7.848c4.807-3.726 5.823-9.473 5.823-16.926"
      />
    </svg>
  );
}

function SwiperIcon({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.884 17.908a4.328 4.328 0 0 1-1.092 1.488 4.817 4.817 0 0 1-1.644.936c-.632.216-1.308.324-2.028.324s-1.368-.1-1.944-.3c-.576-.2-1.088-.464-1.536-.792s-.832-.704-1.152-1.128a6.563 6.563 0 0 1-.768-1.284l1.68-1.008c.144.336.332.66.564.972.232.312.5.588.804.828a3.697 3.697 0 0 0 2.328.792c.4 0 .788-.056 1.164-.168.376-.112.708-.28.996-.504.288-.224.52-.5.696-.828.176-.328.264-.716.264-1.164 0-.432-.084-.804-.252-1.116a2.955 2.955 0 0 0-.684-.84 5 5 0 0 0-1.032-.672c-.4-.2-.832-.412-1.296-.636a44.725 44.725 0 0 1-1.644-.816 7.592 7.592 0 0 1-1.488-1.008 4.752 4.752 0 0 1-1.068-1.332c-.272-.504-.408-1.092-.408-1.764 0-.56.104-1.116.312-1.668a4.474 4.474 0 0 1 .912-1.476c.4-.432.9-.784 1.5-1.056s1.3-.408 2.1-.408c.592 0 1.14.076 1.644.228a5.98 5.98 0 0 1 2.412 1.38c.304.288.552.568.744.84l-1.512 1.224a4.172 4.172 0 0 0-1.284-1.188 4.204 4.204 0 0 0-.924-.408 3.634 3.634 0 0 0-1.08-.156c-.464 0-.868.072-1.212.216a2.692 2.692 0 0 0-.876.576c-.24.24-.42.516-.54.828-.12.312-.18.628-.18.948 0 .4.088.748.264 1.044.176.296.424.572.744.828s.712.504 1.176.744c.464.24.984.488 1.56.744.64.288 1.22.588 1.74.9.52.312.96.652 1.32 1.02.36.368.636.784.828 1.248.192.464.288 1.008.288 1.632 0 .736-.132 1.396-.396 1.98z" />
    </svg>
  );
}

function ChartjsIcon({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 296" className={className} style={style} aria-hidden="true" focusable="false" {...props}>
      <path fill="var(--brand-chartjs-blue)" d="M248.572 148.807c-41.32.811-32.713 26.969-61.833 33.584c-29.582 6.72-34.252-72.248-63.826-72.248c-29.579 0-36.13 76.709-73.166 129.37l-1.057 1.491l79.404 45.836l120.478-69.551z" />
      <path fill="var(--brand-chartjs-yellow)" d="M248.572 146.426c-13.832-17.752-23.214-38.16-43.4-38.16c-35.72 0-26.32 58.271-65.798 58.271c-39.482 0-43.633-62.679-88.358-3.759c-14.252 18.774-25.723 39.707-34.734 59.515l111.812 64.549l120.478-69.551z" />
      <path fill="var(--brand-chartjs-pink)" opacity=".8" d="M7.613 170.564c13.555-37.538 19.405-67.94 45.283-67.94c39.478 0 48.875 110.908 82.718 99.625c33.838-11.278 30.077-71.432 82.719-71.432c10.02 0 20.25 6.138 30.241 16.067v70.405l-120.478 69.55L7.613 217.29z" />
      <path fill="var(--brand-chartjs-frame)" d="M128 295.56L0 221.673V73.89L128 0l128 73.89v147.78zM15.039 212.99L128 278.2l112.961-65.21V82.572L128 17.362L15.039 82.572z" />
    </svg>
  );
}

function Supabase({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 263" {...props}>
      <defs>
        <linearGradient id="SVGMPst3dYn" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%">
          <stop offset="0%" stopColor="#249361" />
          <stop offset="100%" stopColor="#3ecf8e" />
        </linearGradient>
        <linearGradient id="SVGNaiFRdXR" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%">
          <stop offset="0%" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill="url(#SVGMPst3dYn)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z" />
      <path fill="url(#SVGNaiFRdXR)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z" />
      <path fill="#3ecf8e" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z" />
    </svg>
  );
}
function ReduxIcon({ className, style, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className={className} style={style} aria-hidden="true" focusable="false" {...props}>
      <path d="M44.3 44.1c2.4-.2 4.2-2.3 4.1-4.7S46.3 35 43.8 35h-.2c-2.5.1-4.5 2.2-4.4 4.7.1 1.2.6 2.3 1.3 3-2.8 5.5-7 9.4-13.4 12.8-4.3 2.3-8.8 3.1-13.3 2.5-3.7-.5-6.5-2.1-8.3-4.8-2.6-4-2.9-8.3-.7-12.6 1.5-3.1 4-5.4 5.5-6.5-.3-1.1-.8-2.9-1.1-4.2C-2.3 38.4-1.1 50 2.5 55.5c2.7 4.1 8.1 6.6 14.2 6.6 1.6 0 3.3-.2 4.9-.6 10.4-2.1 18.3-8.2 22.7-17.4" />
      <path d="M58.7 34C52.5 26.8 43.4 22.8 33 22.8h-1.3c-.7-1.5-2.3-2.4-4-2.4h-.2c-2.5 0-4.5 2.1-4.4 4.6.1 2.4 2.1 4.4 4.6 4.4h.2c1.8-.1 3.3-1.2 4-2.8h1.5c6.2 0 12.1 1.8 17.3 5.3 4.1 2.7 7 6.2 8.6 10.4 1.4 3.4 1.3 6.8-.2 9.6-2.3 4.3-6.1 6.7-11.2 6.7-3.3 0-6.4-1-8-1.7-.9.8-2.5 2.1-3.7 2.9 3.5 1.6 7.1 2.5 10.5 2.5 7.8 0 13.6-4.3 15.8-8.6C65 49 64.8 40.9 58.7 34" />
      <path d="M17.3 45.4c.1 2.4 2.1 4.4 4.6 4.4h.1c2.5-.1 4.5-2.2 4.4-4.7-.1-2.4-2.1-4.4-4.6-4.4h-.2c-.2 0-.4 0-.6.1-3.3-5.5-4.7-11.6-4.2-18.1.3-4.9 2-9.1 4.8-12.6 2.4-3 6.9-4.5 10-4.6 8.8-.1 12.4 10.6 12.7 14.9 1.1.2 2.9.8 4.1 1.2-1-13.2-9.1-20-16.9-20-7.3 0-14.1 5.3-16.8 13.1C11 25.1 13.4 35.1 18 43c-.5.6-.8 1.5-.7 2.4" />
    </svg>
  );
}

const brandIcons = {
  html: { Icon: SiHtml5, color: "var(--brand-html)" },
  css: { Icon: SiCss, color: "var(--brand-css)" },
  javascript: { Icon: SiJavascript, color: "var(--brand-javascript)" },
  react: { Icon: SiReact, color: "var(--brand-react)" },
  "next.js": { Icon: SiNextdotjs, color: "var(--brand-next)" },
  nextjs: { Icon: SiNextdotjs, color: "var(--brand-next)" },
  "tailwind css": { Icon: SiTailwindcss, color: "var(--brand-tailwind)" },
  tailwind: { Icon: SiTailwindcss, color: "var(--brand-tailwind)" },
  bootstrap: { Icon: SiBootstrap, color: "var(--brand-bootstrap)" },
  redux: { Icon: ReduxIcon, color: "var(--brand-redux)" },
  "redux toolkit": { Icon: ReduxIcon, color: "var(--brand-redux)" },
  "react router": { Icon: ReactRouterIcon, color: "var(--brand-react-router)" },
  "react router dom": { Icon: ReactRouterIcon, color: "var(--brand-react-router)" },
  "react-router": { Icon: ReactRouterIcon, color: "var(--brand-react-router)" },
  swiper: { Icon: SwiperIcon, color: "var(--brand-swiper)" },
  "swiper.js": { Icon: SwiperIcon, color: "var(--brand-swiper)" },
  "swiper js": { Icon: SwiperIcon, color: "var(--brand-swiper)" },
  "chart.js": { Icon: ChartjsIcon, color: "var(--brand-chartjs)" },
  chartjs: { Icon: ChartjsIcon, color: "var(--brand-chartjs)" },
  "chart js": { Icon: ChartjsIcon, color: "var(--brand-chartjs)" },
  git: { Icon: SiGit, color: "var(--brand-git)" },
  npm: { Icon: SiNpm, color: "var(--brand-npm)" },
  vercel: { Icon: SiVercel, color: "var(--brand-vercel)" },
  netlify: { Icon: SiNetlify, color: "var(--brand-netlify)" },
  github: { Icon: SiGithub, color: "var(--brand-github)" },
  linkedin: { Icon: FaLinkedinIn, color: "var(--brand-linkedin)" },
  telegram: { Icon: SiTelegram, color: "var(--brand-telegram)" },
  email: { Icon: SiGmail, color: "var(--brand-email)" },
  gmail: { Icon: SiGmail, color: "var(--brand-email)" },
  api: { Icon: ApiIcon, color: "var(--brand-api)" },
  apis: { Icon: ApiIcon, color: "var(--brand-api)" },
  "rest api": { Icon: ApiIcon, color: "var(--brand-api)" },
  "restful api": { Icon: ApiIcon, color: "var(--brand-api)" },
  "api integration": { Icon: ApiIcon, color: "var(--brand-api)" },
  "tmdb api": { Icon: ApiIcon, color: "var(--brand-api)" },
  "dummyjson api": { Icon: ApiIcon, color: "var(--brand-api)" },
  fetch: { Icon: ApiIcon, color: "var(--brand-api)" },
  axios: { Icon: ApiIcon, color: "var(--brand-api)" },
  supabase: { Icon: Supabase, color: "var(--brand-api)" },
  "responsive design": { Icon: Layers3, color: "var(--brand-responsive)" },
  "responsive ui": { Icon: Layers3, color: "var(--brand-responsive)" },
  performance: { Icon: Gauge, color: "var(--brand-performance)" },
  "clean code": { Icon: Code2, color: "var(--accent)" },
  "product mindset": { Icon: Layers3, color: "var(--accent)" },
};

function normalizeName(name = "") {
  return String(name).trim().toLowerCase().replace(/\s+/g, " ");
}

export function BrandIcon({ name, className = "size-5", style, ...props }) {
  const brand = brandIcons[normalizeName(name)] ?? { Icon: Code2, color: "var(--accent)" };
  const Icon = brand.Icon;

  return <Icon aria-hidden="true" className={className} style={{ color: brand.color, ...style }} {...props} />;
}

export function getBrandColor(name) {
  return brandIcons[normalizeName(name)]?.color ?? "var(--accent)";
}
