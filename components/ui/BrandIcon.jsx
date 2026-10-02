"use client";

import { Code2, Gauge, Layers3 } from "lucide-react";
import { SiBootstrap, SiCss, SiGit, SiGithub, SiGmail, SiHtml5, SiJavascript, SiNetlify, SiNextdotjs, SiNpm, SiReact, SiRedux, SiTailwindcss, SiTelegram, SiVercel } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

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
  redux: { Icon: SiRedux, color: "var(--brand-redux)" },
  git: { Icon: SiGit, color: "var(--brand-git)" },
  npm: { Icon: SiNpm, color: "var(--brand-npm)" },
  vercel: { Icon: SiVercel, color: "var(--brand-vercel)" },
  netlify: { Icon: SiNetlify, color: "var(--brand-netlify)" },
  github: { Icon: SiGithub, color: "var(--brand-github)" },
  linkedin: { Icon: FaLinkedinIn, color: "var(--brand-linkedin)" },
  telegram: { Icon: SiTelegram, color: "var(--brand-telegram)" },
  email: { Icon: SiGmail, color: "var(--brand-email)" },
  gmail: { Icon: SiGmail, color: "var(--brand-email)" },
  api: { Icon: Code2, color: "var(--brand-api)" },
  "rest api": { Icon: Code2, color: "var(--brand-api)" },
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
