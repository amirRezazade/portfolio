"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

let links = [
  {
    name: "خانه",
    href: "home",
  },
  {
    name: " درباره من",
    href: "about",
  },
  {
    name: " مهارت ها",
    href: "skills",
  },
  {
    name: "  پروژه ها",
    href: "project",
  },
  {
    name: "تماس با من",
    href: "contact",
  },
];
export default function Navbar(params) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".nav-control");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // وقتی بخش وسط صفحه بود
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full z-99 top-0 right-0 bg-linear-to-b from-black to-black/10">
      <div className="container flex justify-between items-center px-2 xs:px-5 lg:px-10 mx-auto">
        <a href="https://github.com/amirRezazade" target="-blank" className="hidden xs:inline-block w-15 h-15">
          <Image width={60} height={60} className="object-cover" src="/images/github-logo.gif" alt="git hub logo" />
        </a>

        <ul id="nav-menu" className="w-full flex justify-between px-3 xs:pr-5 xs:px-5 grow xs:justify-center py-5 xs:py-0 text-xs sm:text-sm xs:gap-5 md:gap-8 xl:gap-10">
          {links.map((l) => (
            <li key={l.href} className="">
              <Link href={"#" + l.href} className={` ${activeSection == l.href ? "nav-item-active" : "text-white"}  block px-1 py-1  hover:bg-linear-to-r from-[#6366f1] to-[#a855f7] hover:bg-clip-text hover:text-transparent transition-colors duration-300 `}>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
