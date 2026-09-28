"use client";

import { Braces, Code2, Database, GitBranch, Layers3, Radar, Rocket, Sparkles } from "lucide-react";
import { skillsContent } from "../data/skills";
import { cn } from "../lib/cn";

const groupIcons = [Braces, Layers3, Sparkles, Database, GitBranch];

export default function Skills({ lang }) {
  const t = skillsContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="skills" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="relative w-full overflow-hidden rounded-[34px] border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--surface-rgb)/0.34)] shadow-[0_24px_90px_rgb(var(--shadow-rgb)/0.26),inset_0_1px_0_rgb(var(--text-rgb)/0.04)] backdrop-blur-sm xs:rounded-3xl">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgb(var(--secondary-rgb)/.06)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--secondary-rgb)/.06)_1px,transparent_1px),radial-gradient(circle,rgb(var(--text-rgb)/.45)_0_1px,transparent_1px)] [background-position:0_0,0_0,32px_42px] [background-size:64px_64px,64px_64px,130px_130px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" aria-hidden="true" />
        <div className={cn("pointer-events-none absolute top-[-20%] h-[460px] w-[460px] rounded-full bg-[rgb(var(--accent-rgb)/0.14)] blur-[100px]", isRtl ? "right-[-12%]" : "left-[-12%]")} aria-hidden="true" />

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
              <h2 className="text-[clamp(1.8rem,3.6vw,3.6rem)] font-black leading-[1.08] tracking-[-0.04em] text-[var(--text)] text-balance xs:text-[clamp(1.55rem,8vw,2.35rem)]">{t.title}</h2>
              <p className="max-w-[760px] text-[clamp(0.94rem,1.2vw,1.04rem)] leading-[2] text-[rgb(var(--text-rgb)/0.78)]">{t.description}</p>
            </div>
          </header>

          <div className="grid grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] gap-4 max-xl:grid-cols-1">
            <aside className="rounded-[32px] border border-[rgb(var(--secondary-rgb)/0.18)] bg-[rgb(var(--bg-rgb)/0.34)] p-5 shadow-[0_20px_80px_rgb(var(--shadow-rgb)/0.25)] backdrop-blur-sm xs:rounded-3xl xs:p-4">
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
                const Icon = groupIcons[index] ?? Code2;

                return (
                  <article key={group.title} className="group relative overflow-hidden rounded-[28px] border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--bg-rgb)/0.34)] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--secondary-rgb)/0.35)] hover:bg-[rgb(var(--surface-rgb)/0.48)] xs:rounded-3xl xs:p-4">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--secondary-rgb)/0.55)] to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />

                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.2)] bg-[rgb(var(--primary-rgb)/0.1)] text-[var(--secondary)] transition group-hover:bg-[rgb(var(--primary-rgb)/0.18)]">
                          <Icon aria-hidden="true" size={20} />
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
                        <span key={skill} className="rounded-full border border-[rgb(var(--secondary-rgb)/0.16)] bg-[rgb(var(--surface-rgb)/0.34)] px-3 py-2 text-sm font-extrabold text-[rgb(var(--text-rgb)/0.9)] transition group-hover:border-[rgb(var(--secondary-rgb)/0.28)] group-hover:bg-[rgb(var(--primary-rgb)/0.1)]">
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
