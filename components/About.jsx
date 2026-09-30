"use client";

import { useEffect, useMemo, useState } from "react";
import { Code2, Gauge, Layers3, Orbit, RadioTower, Sparkles } from "lucide-react";
import { aboutContent } from "../data/about";
import { socialLinks } from "../data/hero";
import { BrandIcon } from "./BrandIcon";
import { cn } from "../lib/cn";

const highlightIcons = [Orbit, Code2, Layers3, Gauge];
const githubLink = socialLinks.find((link) => link.id === "github")?.href ?? "https://github.com/amirRezazade";
const contributionDays = ["", "Mon", "", "Wed", "", "Fri", ""];
const emptyContributionWeeks = Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => ({ date: "", count: 0, level: 0, isPlaceholder: true })));

function parseContributionDate(date) {
  const [year, month, day] = String(date).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatContributionDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, amount) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
}

function buildContributionWeeks(contributions = []) {
  if (!contributions.length) return emptyContributionWeeks;

  const contributionMap = new Map(contributions.map((item) => [item.date, item]));
  const firstDate = parseContributionDate(contributions[0].date);
  const lastDate = parseContributionDate(contributions.at(-1).date);
  const startDate = addDays(firstDate, -firstDate.getDay());
  const endDate = addDays(lastDate, 6 - lastDate.getDay());
  const weeks = [];
  let cursor = startDate;

  while (cursor <= endDate) {
    const week = [];

    for (let day = 0; day < 7; day += 1) {
      const date = formatContributionDate(cursor);
      const contribution = contributionMap.get(date);

      week.push({
        date,
        count: contribution?.count ?? 0,
        level: contribution?.level ?? 0,
        isPlaceholder: !contribution,
      });

      cursor = addDays(cursor, 1);
    }

    weeks.push(week);
  }

  return weeks;
}

function buildMonthLabels(weeks) {
  return weeks.map((week) => {
    const firstOfMonth = week.find((item) => item.date && parseContributionDate(item.date).getDate() === 1);
    return firstOfMonth ? parseContributionDate(firstOfMonth.date).toLocaleString("en", { month: "short" }) : "";
  });
}
export default function About({ lang }) {
  const t = aboutContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="about" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="section-shell">
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

            <h2 className="section-title mt-4 max-w-[780px]">{t.title}</h2>

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
            <div className="glass-card ">
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
            </div>
          </aside>
          <div className="min-w-0 lg:col-span-2">
            <GitHubActivity lang={lang} isRtl={isRtl} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubActivity({ lang, isRtl }) {
  const [activity, setActivity] = useState({ status: "loading", total: 0, contributions: [] });

  useEffect(() => {
    let isMounted = true;

    fetch("/api/github-contributions")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load GitHub activity");
        return response.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setActivity({
          status: "ready",
          total: Number(data.total) || 0,
          contributions: Array.isArray(data.contributions) ? data.contributions : [],
        });
      })
      .catch(() => {
        if (!isMounted) return;
        setActivity({ status: "error", total: 0, contributions: [] });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const weeks = useMemo(() => buildContributionWeeks(activity.contributions), [activity.contributions]);
  const monthLabels = useMemo(() => buildMonthLabels(weeks), [weeks]);
  const isLoading = activity.status === "loading";
  const hasError = activity.status === "error";

  const copy = {
    fa: {
      badge: "Live GitHub Activity",
      title: "ردپای واقعی کدنویسی در گیت‌هاب",
      description: "این نمودار از داده‌های عمومی گیت‌هاب شما خوانده می‌شود و فعالیت یک سال اخیر را با تم تیره نشان می‌دهد.",
      loading: "در حال دریافت از گیت‌هاب...",
      unavailable: "داده‌های گیت‌هاب فعلاً در دسترس نیست.",
      total: `${activity.total.toLocaleString("fa-IR")} فعالیت واقعی`,
      profile: "مشاهده پروفایل",
      less: "کمتر",
      more: "بیشتر",
    },
    en: {
      badge: "Live GitHub Activity",
      title: "Real coding footprint on GitHub",
      description: "This chart is loaded from your public GitHub data and shows the last year of activity in dark mode.",
      loading: "Loading from GitHub...",
      unavailable: "GitHub data is currently unavailable.",
      total: `${activity.total.toLocaleString("en-US")} real contributions`,
      profile: "View profile",
      less: "Less",
      more: "More",
    },
  }[lang];

  return (
    <article className={cn("github-activity-card", isRtl ? "text-right" : "text-left")}>
      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--surface-rgb)/0.36)] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[var(--accent)]">
            <BrandIcon name="github" className="size-4" />
            {copy.badge}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--text-rgb)/0.035)] px-3 py-2 text-sm xs:text-xs font-black text-[var(--text)]">{isLoading ? copy.loading : hasError ? copy.unavailable : copy.total}</span>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 xs:text-xs text-sm font-black text-[rgb(var(--text-rgb)/0.9)] transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.38)] focus-visible:-translate-y-0.5 focus-visible:outline-none">
            <BrandIcon name="github" className="size-4" />
            {copy.profile}
          </a>
        </div>
      </div>

      <div className={cn("github-chart-scroll", isLoading && "opacity-55")} aria-label={copy.title}>
        <div className="github-months" aria-hidden="true">
          {monthLabels.map((month, index) => (
            <span key={`${month}-${index}`}>{month}</span>
          ))}
        </div>

        <div className="github-graph-body">
          <div className="github-days" aria-hidden="true">
            {contributionDays.map((day, index) => (
              <span key={`${day}-${index}`}>{day}</span>
            ))}
          </div>

          <div className="github-grid">{weeks.flatMap((week, weekIndex) => week.map((cell, dayIndex) => <span key={`${cell.date || "placeholder"}-${weekIndex}-${dayIndex}`} className={cn("github-contrib-cell", cell.level > 0 && `github-contrib-cell--${cell.level}`)} title={cell.date ? `${cell.count} contributions on ${cell.date}` : undefined} aria-label={cell.date ? `${cell.count} contributions on ${cell.date}` : "No contribution data"} />))}</div>
        </div>
      </div>

      <div className={cn("relative mt-4 flex items-center gap-3", isRtl ? "justify-start" : "justify-end")}>
        <span className="github-legend">
          {copy.less}
          <span className="github-legend-cells" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((level) => (
              <span key={level} className={cn("github-contrib-cell size-3", level > 0 && `github-contrib-cell--${level}`)} />
            ))}
          </span>
          {copy.more}
        </span>
      </div>
    </article>
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
