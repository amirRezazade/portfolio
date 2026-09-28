"use client";

import { Code2, Gauge, Layers3, Orbit, RadioTower, Sparkles } from "lucide-react";
import { aboutContent } from "../data/about";
import { cn } from "../lib/cn";

const highlightIcons = [Orbit, Code2, Layers3, Gauge];

export default function About({ lang }) {
  const t = aboutContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="about" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="relative w-full overflow-hidden rounded-[34px] border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--surface-rgb)/0.34)] shadow-[0_24px_90px_rgb(var(--shadow-rgb)/0.26),inset_0_1px_0_rgb(var(--text-rgb)/0.04)] backdrop-blur-sm xs:rounded-3xl">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgb(var(--text-rgb)/.55)_0_1px,transparent_1px),linear-gradient(rgb(var(--secondary-rgb)/.06)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--secondary-rgb)/.06)_1px,transparent_1px)] [background-position:18px_22px,0_0,0_0] [background-size:120px_120px,58px_58px,58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" aria-hidden="true" />
        <div className={cn("pointer-events-none absolute top-[-22%] h-[420px] w-[420px] rounded-full bg-[rgb(var(--accent-rgb)/0.16)] blur-[100px]", isRtl ? "left-[-10%]" : "right-[-10%]")} aria-hidden="true" />

        <div className="relative grid w-full grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] gap-10 p-[clamp(26px,5vw,64px)] max-lg:grid-cols-1 xs:p-4">
          <div className={cn("min-w-0", isRtl ? "text-right" : "text-left")}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--bg-rgb)/0.34)] px-3 py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-sm xs:text-[0.7rem]">
              <Sparkles aria-hidden="true" size={15} />
              {t.badge}
            </p>

            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-sm font-black text-[rgb(var(--muted-rgb)/1)]">{t.eyebrow}</span>
              <span className="h-px min-w-16 flex-1 bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.5)] to-transparent" aria-hidden="true" />
            </div>

            <h2 className="mt-4 max-w-[780px] text-[clamp(1.8rem,3.6vw,3.6rem)] font-black leading-[1.08] tracking-[-0.04em] text-[var(--text)] text-balance xs:text-[clamp(1.55rem,8vw,2.35rem)]">{t.title}</h2>

            <div className="mt-7 grid gap-4 text-[clamp(0.98rem,1.35vw,1.1rem)] leading-[2] text-[rgb(var(--text-rgb)/0.85)]">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {t.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Sparkles;

                return (
                  <article key={item.label} className="group rounded-3xl border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--bg-rgb)/0.32)] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--secondary-rgb)/0.35)] hover:bg-[rgb(var(--surface-rgb)/0.46)] xs:rounded-2xl xs:p-3">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="grid size-10 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.2)] bg-[rgb(var(--primary-rgb)/0.1)] text-[var(--secondary)] transition group-hover:bg-[rgb(var(--primary-rgb)/0.2)]">
                        <Icon aria-hidden="true" size={19} />
                      </span>
                      <span className="text-xs font-black text-[rgb(var(--muted-rgb)/0.65)]">0{index + 1}</span>
                    </div>
                    <strong className="block text-[1.02rem] font-black text-[var(--text)]">{item.value}</strong>
                    <h3 className="mt-1 font-extrabold text-[var(--secondary)]">{item.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted-rgb)/1)]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="relative min-w-0 self-stretch">
            <div className="sticky top-28 rounded-[32px] border border-[rgb(var(--secondary-rgb)/0.2)] bg-[rgb(var(--bg-rgb)/0.38)] p-5 shadow-[0_22px_80px_rgb(var(--shadow-rgb)/0.32)] backdrop-blur-sm max-lg:static xs:rounded-3xl xs:p-4">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.2)] bg-[rgb(var(--surface-rgb)/0.46)] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--secondary)]">
                  <RadioTower aria-hidden="true" size={15} />
                  {t.profile.label}
                </div>
                <span className="size-3 rounded-full bg-[var(--secondary)] shadow-[0_0_0_6px_rgb(var(--secondary-rgb)/0.12),0_0_22px_rgb(var(--secondary-rgb)/0.6)]" aria-hidden="true" />
              </div>

              <div className="rounded-[26px] border border-[rgb(var(--text-rgb)/0.1)] bg-gradient-to-br from-[rgb(var(--surface-rgb)/0.46)] to-[rgb(var(--bg-rgb)/0.34)] p-5 xs:p-4">
                <div className="flex items-center gap-4">
                  <div className="relative grid size-16 shrink-0 place-items-center rounded-3xl border border-[rgb(var(--secondary-rgb)/0.25)] bg-[rgb(var(--primary-rgb)/0.1)] text-2xl font-black text-[var(--text)] shadow-[0_0_34px_rgb(var(--primary-rgb)/0.18)]">
                    AR
                    <span className="absolute -end-1 -top-1 size-4 rounded-full border-2 border-[var(--bg)] bg-[var(--secondary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[var(--text)]">{t.profile.name}</h3>
                    <p className="mt-1 text-sm font-bold text-[var(--secondary)]">{t.profile.role}</p>
                  </div>
                </div>

                <dl className="mt-7 grid gap-3">
                  <ProfileRow label={t.profile.nameLabel} value={t.profile.name} />
                  <ProfileRow label={t.profile.roleLabel} value={t.profile.role} />
                  <ProfileRow label={t.profile.focusLabel} value={t.profile.focus} />
                  <ProfileRow label={t.profile.interestsLabel} value={t.profile.interests} />
                </dl>
              </div>

              <div className="mt-4 rounded-[26px] border border-[rgb(var(--secondary-rgb)/0.15)] bg-[rgb(var(--primary-rgb)/0.1)] p-5 xs:p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--secondary)]">{t.profile.statusLabel}</p>
                <p className="mt-2 text-2xl font-black text-[var(--text)] xs:text-xl">{t.profile.status}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgb(var(--bg-rgb)/0.56)]">
                  <span className="block h-full w-[78%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-[0_0_22px_rgb(var(--secondary-rgb)/0.45)]" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="grid gap-1 rounded-2xl border border-[rgb(var(--text-rgb)/0.06)] bg-[rgb(var(--text-rgb)/0.035)] p-3">
      <dt className="text-xs font-black text-[rgb(var(--muted-rgb)/0.65)]">{label}</dt>
      <dd className="text-sm font-bold leading-6 text-[rgb(var(--text-rgb)/0.9)]">{value}</dd>
    </div>
  );
}
