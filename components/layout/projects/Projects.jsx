"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { projectsContent } from "../../../data/projects";
import { cn } from "../../../lib/cn";
import Image from "next/image";
import { BrandIcon } from "../../ui/BrandIcon";

export default function Projects({ lang }) {
  const t = projectsContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="projects" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="section-shell">
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
                <h2 className="section-title">{t.title}</h2>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] lg:grid-cols-2 justify-center gap-5">
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
  const layoutClass = isRtl ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.92fr_1.08fr]";

  return (
    <article className="group relative  min-h-[430px] overflow-hidden rounded-[34px] border border-[rgb(var(--secondary-rgb)/0.18)] bg-[rgb(var(--bg-rgb)/0.34)] shadow-[0_22px_78px_rgb(var(--shadow-rgb)/0.22),inset_0_1px_0_rgb(var(--text-rgb)/0.045)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.42)] hover:bg-[rgb(var(--surface-rgb)/0.36)] xs:rounded-3xl">
      <div className={cn("relative  h-full gap-6  max-lg:grid-cols-2 ", layoutClass)}>
        <div className="relative z-10 min-h-[300px] aspect-6/4 w-full  overflow-hidden  xs:min-h-[230px] mb-3">
          <Image src={project.image} fill alt="test" className="" />
        </div>
        <ProjectCopy project={project} index={index} actions={actions} isRtl={isRtl} className={isRtl ? "lg:order-2" : "lg:order-1"} />
      </div>
    </article>
  );
}

function ProjectCopy({ project, index, actions, isRtl, className }) {
  return (
    <div className={cn("relative z-10 flex  flex-col justify-between gap-8 p-[clamp(20px,4vw,25px)] xs:p-4 text-start", className)}>
      <div>
        <div className="flex items-center justify-between items-center">
          <h3 className="text-[clamp(1.5rem,4.6vw,1rem)] font-black leading-[1.05] tracking-[-0.05em] text-[var(--text)] text-balance xs:text-[clamp(1.7rem,10vw,1.6rem)]">{project.title}</h3>
          <p className=" xs:hidden inline-block text-[0.76rem] font-black uppercase tracking-[0.16em] text-[var(--accent)] xs:text-[0.68rem]">
            {String(index + 1).padStart(2, "0")} / {project.type}
          </p>
        </div>

        <p className="mt-4 max-w-[620px] text-[clamp(1rem,1.55vw,1rem)] xs:text-base font-bold leading-[1.4] text-[rgb(var(--text-rgb)/0.86)]">{project.description}</p>

        <div className="sm:h-25 xs:mt-4 flex flex-wrap gap-x-4 xs:gap-x-2.5  xs:my-5">
          {project.tech.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <div className=" flex flex-wrap gap-3 xs:grid xs:grid-cols-1">
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="cosmic-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-[0.94rem] font-black">
            {" "}
            <ExternalLink aria-hidden="true" size={17} />
            {actions.demo}
          </a>
          <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.18)] bg-[rgb(var(--surface-rgb)/0.34)] px-5 text-[0.94rem] font-black text-[rgb(var(--text-rgb)/0.88)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.36)] hover:bg-[rgb(var(--accent-rgb)/0.1)] focus-visible:-translate-y-0.5 focus-visible:outline-none">
            <BrandIcon name={"github"} className="size-[17px]" />
            {actions.code}
          </a>
        </div>
      </div>
    </div>
  );
}

function TechPill({ tech }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl text-xs font-extrabold text-[rgb(var(--text-rgb)/0.9)]">
      <span className="grid size-9 place-items-center rounded-xl border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--surface-rgb)/0.4)] shadow-[inset_0_1px_0_rgb(var(--text-rgb)/0.04)]">
        <BrandIcon name={tech} className="size-5" />
      </span>
      <span className="hidden sm:inline-block">{tech}</span>
    </span>
  );
}
