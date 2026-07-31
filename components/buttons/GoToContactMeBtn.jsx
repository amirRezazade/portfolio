"use client";
import { scrollToSection } from "../utils";

export default function GoToContactMeBtn(params) {
  return (
    <button onClick={() => scrollToSection("contact")} className="btn-style inline-block cursor-pointer">
      <span>تماس با من</span>
    </button>
  );
}
