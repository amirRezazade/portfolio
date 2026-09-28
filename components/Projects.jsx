"use client";

import { ArrowUpRight, Code2, ExternalLink, Film, Gamepad2, GraduationCap, LayoutDashboard, Rocket, ShoppingBag, Sparkles } from "lucide-react";
import { projectsContent } from "../data/projects";
import { cn } from "../lib/cn";
import Image from "next/image";

const projectIcons = {
  film: Film,
  shop: ShoppingBag,
  dashboard: LayoutDashboard,
  game: Gamepad2,
  edu: GraduationCap,
};

export default function Projects({ lang }) {
  const t = projectsContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="projects" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="relative w-full overflow-hidden rounded-[34px] border border-[rgb(var(--accent-rgb)/0.16)] bg-[rgb(var(--surface-rgb)/0.28)] shadow-[0_24px_90px_rgb(var(--shadow-rgb)/0.24),inset_0_1px_0_rgb(var(--text-rgb)/0.04)] backdrop-blur-sm xs:rounded-3xl">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle,rgb(var(--text-rgb)/.46)_0_1px,transparent_1px),linear-gradient(120deg,rgb(var(--accent-rgb)/.06)_1px,transparent_1px)] [background-position:24px_34px,0_0] [background-size:128px_128px,72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" aria-hidden="true" />
        <div className={cn("pointer-events-none absolute top-[-26%] h-[460px] w-[460px] rounded-full bg-[rgb(var(--accent-rgb)/0.13)] blur-[105px]", isRtl ? "left-[-14%]" : "right-[-14%]")} aria-hidden="true" />

        <div className="relative grid gap-8 p-[clamp(22px,4vw,52px)] xs:p-4">
          <header className={cn("grid gap-5", isRtl ? "text-right" : "text-left")}>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--bg-rgb)/0.34)] px-3 py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-sm xs:text-[0.68rem]">
              <Sparkles aria-hidden="true" size={15} />
              {t.badge}
            </p>

            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-sm font-black text-[rgb(var(--muted-rgb)/1)]">{t.eyebrow}</span>
              <span className="h-px min-w-16 flex-1 bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.5)] to-transparent" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 max-lg:grid-cols-1">
              <div className="grid max-w-[900px] gap-3">
                <h2 className="text-[clamp(1.8rem,3.6vw,3.6rem)] font-black leading-[1.12] tracking-[-0.035em] text-[var(--text)] text-balance xs:text-[clamp(1.55rem,8vw,2.35rem)]">{t.title}</h2>
              </div>
            </div>
          </header>

          <div className="grid sm:grid-cols-2 gap-5">
            {t.projects.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} actions={t.actions} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index, actions, isRtl }) {
  const Icon = projectIcons[project.icon] ?? Rocket;
  const layoutClass = isRtl ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.92fr_1.08fr]";

  return (
    <article className="group relative min-h-[430px] overflow-hidden rounded-[34px] border border-[rgb(var(--secondary-rgb)/0.18)] bg-[rgb(var(--bg-rgb)/0.34)] shadow-[0_22px_78px_rgb(var(--shadow-rgb)/0.22),inset_0_1px_0_rgb(var(--text-rgb)/0.045)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--surface-rgb)/0.36)] xs:rounded-3xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgb(var(--secondary-rgb)/0.18),transparent_32%),radial-gradient(circle_at_20%_100%,rgb(var(--accent-rgb)/0.13),transparent_30%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgb(var(--secondary-rgb)/.18)_1px,transparent_1px),linear-gradient(rgb(var(--accent-rgb)/.12)_1px,transparent_1px)] [background-size:76px_76px]" aria-hidden="true" />

      <div className={cn("relative  h-full gap-6  max-lg:grid-cols-2 ", layoutClass)}>
        <ProjectVisual project={project} isRtl={isRtl} className={isRtl ? "lg:order-1" : "lg:order-2"} />
        <ProjectCopy project={project} index={index} actions={actions} isRtl={isRtl} className={isRtl ? "lg:order-2" : "lg:order-1"} />
      </div>
    </article>
  );
}

function ProjectCopy({ project, index, actions, isRtl, className }) {
  const Icon = projectIcons[project.icon] ?? Rocket;
  const featuredLabel = isRtl ? "پروژه منتخب" : "Featured Project";

  return (
    <div className={cn("relative z-10 flex  flex-col justify-between gap-8 p-[clamp(20px,4vw,25px)] xs:p-4s", isRtl ? "text-right" : "text-left", className)}>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-[clamp(2rem,4.6vw,2rem)] font-black leading-[1.05] tracking-[-0.05em] text-[var(--text)] text-balance xs:text-[clamp(1.7rem,10vw,2.55rem)]">{project.title}</h3>
          <p className="mb-3 text-[0.76rem] font-black uppercase tracking-[0.16em] text-[var(--accent)] xs:text-[0.68rem]">
            {String(index + 1).padStart(2, "0")} / {project.type}
          </p>
        </div>

        <p className="mt-4 max-w-[620px] text-[clamp(1rem,1.55vw,1rem)] font-bold leading-[1.8] text-[rgb(var(--text-rgb)/0.86)]">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-4 xs:gap-2.5">
          {project.tech.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 xs:grid xs:grid-cols-1">
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-5 text-[0.94rem] font-black text-[var(--text)] shadow-[0_18px_42px_rgb(var(--primary-rgb)/0.2)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none">
            <ExternalLink aria-hidden="true" size={17} />
            {actions.demo}
          </a>
          <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.18)] bg-[rgb(var(--surface-rgb)/0.34)] px-5 text-[0.94rem] font-black text-[rgb(var(--text-rgb)/0.88)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.36)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:outline-none">
            <Code2 aria-hidden="true" size={17} />
            {actions.code}
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, isRtl, className }) {
  return (
    <div className={cn("relative z-10 min-h-[300px] w-full overflow-hidden rounded-md  xs:min-h-[230px] mb-3", className)}>
      <Image src={"/projects/nexora-admin.jpg"} width={600} height={300} alt="test" className="w-full" />
    </div>
  );
}

function TechPill({ tech }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl text-sm font-extrabold text-[rgb(var(--text-rgb)/0.9)]">
      <span className="grid size-11 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--surface-rgb)/0.4)] text-[var(--accent)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.04)]">{tech.slice(0, 1)}</span>
      <span>{tech}</span>
    </span>
  );
}
