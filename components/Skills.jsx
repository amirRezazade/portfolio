"use client";

import { Radar, Rocket } from "lucide-react";
import { skillsContent } from "../data/skills";
import { BrandIcon } from "./BrandIcon";
import { cn } from "../lib/cn";

const groupIcons = ["HTML", "React", "Tailwind CSS", "Redux", "Git"];

export default function Skills({ lang }) {
  const t = skillsContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="skills" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="section-shell">
        <div className="relative grid gap-10 p-[clamp(26px,5vw,64px)] xs:p-4">
          <header className={cn("grid gap-5", isRtl ? "text-right" : "text-left")}>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--bg-rgb)/0.34)] px-3 py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-sm xs:text-[0.7rem]">
              <Radar aria-hidden="true" size={15} />
              {t.badge}
            </p>

            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-sm font-black text-[rgb(var(--muted-rgb)/1)]">{t.eyebrow}</span>
              <span className="h-px min-w-16 flex-1 bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.5)] to-transparent" aria-hidden="true" />
            </div>

            <div className="grid max-w-[980px] gap-4">
              <h2 className="section-title">{t.title}</h2>
              <p className="max-w-[760px] text-[clamp(0.94rem,1.2vw,1.04rem)] leading-[2] text-[rgb(var(--text-rgb)/0.78)]">{t.description}</p>
            </div>
          </header>

          <div className="grid grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] gap-4 max-xl:grid-cols-1">
            <aside className="glass-card">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.22)] bg-[rgb(var(--primary-rgb)/0.12)] text-[var(--secondary)]">
                  <Rocket aria-hidden="true" size={22} />
                </span>
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)] shadow-[0_0_0_6px_rgb(var(--secondary-rgb)/0.12),0_0_22px_rgb(var(--secondary-rgb)/0.58)]" />
              </div>

              <h3 className="mt-6 text-2xl font-black text-[var(--text)] xs:text-xl">{t.summary.title}</h3>
              <p className="mt-3 leading-8 text-[rgb(var(--text-rgb)/0.72)]">{t.summary.description}</p>

              <div className="mt-6 grid gap-2">
                {t.summary.items.map((item) => (
                  <div key={item} className="flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--text-rgb)/0.07)] bg-[rgb(var(--text-rgb)/0.035)] px-3 py-3">
                    <span className="font-bold text-[rgb(var(--text-rgb)/0.86)]">{item}</span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-[rgb(var(--bg-rgb)/0.72)]">
                      <span className="block h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              {t.groups.map((group, index) => {
                const iconName = groupIcons[index] ?? group.items[0];

                return (
                  <article key={group.title} className="group skill-card">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--secondary-rgb)/0.55)] to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />

                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.16)] bg-[rgb(var(--surface-rgb)/0.36)] transition group-hover:bg-[rgb(var(--primary-rgb)/0.14)]">
                          <BrandIcon name={iconName} className="size-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-black text-[var(--text)]">{group.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-[rgb(var(--muted-rgb)/0.92)]">{group.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-[rgb(var(--muted-rgb)/0.65)]">0{index + 1}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.16)] bg-[rgb(var(--surface-rgb)/0.34)] px-3 py-2 text-xs font-bold text-[rgb(var(--text-rgb)/0.9)] transition group-hover:border-[rgb(var(--accent-rgb)/0.3)] group-hover:bg-[rgb(var(--primary-rgb)/0.1)]">
                          <BrandIcon name={skill} className="size-4" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
