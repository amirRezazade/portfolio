"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600, // مدت انیمیشن
      once: false, // هربار اسکرول انیمیشن بده
      easing: "ease-in-out",
    });
  }, []);

  return null;
}
