"use client";
import { useRef, useState, useEffect } from "react";
import "./navbar.css";

import Image from "next/image";

let links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About Me",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact Me",
    id: "contact",
  },
];
export default function Navbar() {
  const [active, setActive] = useState("home");
  const [glow, setGlow] = useState({
    width: 0,
    left: 0,
  });
  const cardRef = useRef(null);

  const refs = useRef([]);

  useEffect(() => {
    const index = links.findIndex((item) => item.id === active);

    const el = refs.current[index];

    if (el) {
      setGlow({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  }, [active]);

  // تشخیص Section فعال
  useEffect(() => {
    const sections = links.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  function handleMove(e) {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  }

  return (
    <div className="fixed top-0 z-10">
      <a href="https://github.com/amirRezazade" target="-blank" className="hidden sm:inline-block w-15 h-15 mr-3 md:mr-10">
        <Image width={60} height={60} className="object-cover" src="/images/github-logo.gif" alt="git hub logo" />
      </a>
      <nav ref={cardRef} onMouseMove={handleMove} className=" fixed top-3 md:top-5 right-1/2 border border-purple-500/50 bg-[#0a0a0a] rounded-full h-11 z-10 overflow-hidden translate-x-1/2 flex px-2 xs:px-3 justify-center items-center text-xs xs:text-sm  font-bold">
        {links.map((tab, index) => (
          <button key={tab.id} ref={(el) => (refs.current[index] = el)} className={`${active === tab.id ? "text-white" : ""} h-full cursor-pointer flex justify-center items-center px-1.5 xs:px-4.5 text-gray-300/85 text-nowrap hover:text-white transition-colors duration-300`} onClick={() => scrollToSection(tab.id)}>
            {tab.name}
          </button>
        ))}
        <div className="shaddow" />
        {/* Glow */}
        <div
          className="glow-nav"
          style={{
            width: glow.width,
            left: glow.left,
          }}
        />
      </nav>
    </div>
  );
}
