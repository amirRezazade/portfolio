"use client";
import { scrollToSection } from "../utils";

export default function GoToProjectsBtn() {
  return (
    <button onClick={() => scrollToSection("projects")} className="btn-style cursor-pointer inline-block">
      <span>نمونه کار های من</span>
    </button>
  );
}
