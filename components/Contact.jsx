"use client";

import { AtSign, Mail, MessageSquare, Radio, Send, User } from "lucide-react";
import { contactContent } from "../data/contact";
import { BrandIcon } from "./BrandIcon";
import { cn } from "../lib/cn";

export default function Contact({ lang }) {
  const t = contactContent[lang];
  const isRtl = lang === "fa";

  return (
    <section id="contact" className="relative w-full scroll-mt-24 px-[clamp(18px,4vw,60px)] py-20 xs:px-2 xs:py-14">
      <div className="section-shell">
        <div className="relative grid grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)] gap-6 p-[clamp(26px,5vw,64px)] max-lg:grid-cols-1 xs:p-4">
          <div className={cn("grid content-between gap-8", isRtl ? "text-right" : "text-left")}>
            <div>
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--bg-rgb)/0.34)] px-3 py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-sm xs:text-[0.7rem]">
                <Radio aria-hidden="true" size={15} />
                {t.badge}
              </p>

              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-sm font-black text-[rgb(var(--muted-rgb)/1)]">{t.eyebrow}</span>
                <span className="h-px min-w-16 flex-1 bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.5)] to-transparent" aria-hidden="true" />
              </div>

              <h2 className="section-title mt-4 max-w-[760px]">{t.title}</h2>
              <p className="mt-5 max-w-[720px] text-[clamp(0.94rem,1.2vw,1.04rem)] leading-[2] text-[rgb(var(--text-rgb)/0.78)]">{t.description}</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[30px] border border-[rgb(var(--secondary-rgb)/0.16)] bg-[rgb(var(--bg-rgb)/0.32)] p-5 backdrop-blur-sm xs:rounded-3xl xs:p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--secondary)]">{t.status.label}</p>
                <p className="mt-2 text-2xl font-black text-[var(--text)] xs:text-xl">{t.status.value}</p>
                <p className="mt-2 text-sm font-bold text-[rgb(var(--text-rgb)/0.65)]">{t.status.response}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgb(var(--bg-rgb)/0.72)]">
                  <span className="block h-full w-[84%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-[0_0_22px_rgb(var(--secondary-rgb)/0.42)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                {t.cards.map((card) => (
                  <a
                    key={card.id}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group rounded-[26px] border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--bg-rgb)/0.42)] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.34)] hover:bg-[rgb(var(--surface-rgb)/0.48)] focus-visible:-translate-y-1 focus-visible:border-[rgb(var(--accent-rgb)/0.34)] focus-visible:outline-none xs:rounded-3xl"
                  >
                    <span className="mb-4 grid size-10 place-items-center rounded-2xl border border-[rgb(var(--secondary-rgb)/0.16)] bg-[rgb(var(--surface-rgb)/0.34)] transition group-hover:bg-[rgb(var(--primary-rgb)/0.14)]">
                      <BrandIcon name={card.id} className="size-[19px]" />
                    </span>
                    <span className="block text-sm font-black text-[rgb(var(--muted-rgb)/0.9)]">{card.label}</span>
                    <strong className="mt-1 block break-words text-sm font-extrabold leading-6 text-[var(--text)]">{card.value}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="glass-card" action="https://formspree.io/f/xblpdyel" method="POST">
            <input type="hidden" name="_subject" value="Portfolio contact message" />
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--secondary-rgb)/0.2)] bg-[rgb(var(--surface-rgb)/0.46)] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--secondary)]">
                <MessageSquare aria-hidden="true" size={15} />
                {t.eyebrow}
              </div>
              <span className="size-3 rounded-full bg-[var(--secondary)] shadow-[0_0_0_6px_rgb(var(--secondary-rgb)/0.12),0_0_22px_rgb(var(--secondary-rgb)/0.58)]" aria-hidden="true" />
            </div>

            <div className="grid gap-4">
              <Field icon={User} id="contact-name" name="name" label={t.form.name} placeholder={t.form.namePlaceholder} autoComplete="name" minLength={3} required />
              <Field icon={AtSign} id="contact-email" type="email" name="email" label={t.form.email} placeholder={t.form.emailPlaceholder} autoComplete="email" required />

              <label className="grid gap-2" htmlFor="contact-message">
                <span className="text-sm font-black text-[rgb(var(--text-rgb)/0.82)]">{t.form.message}</span>
                <span className="relative block">
                  <MessageSquare aria-hidden="true" size={18} className="pointer-events-none absolute start-4 top-4 text-[rgb(var(--secondary-rgb)/0.72)]" />
                  <textarea id="contact-message" name="message" minLength={5} required rows={7} placeholder={t.form.messagePlaceholder} className="min-h-40 w-full resize-none rounded-3xl border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--surface-rgb)/0.34)] px-4 py-4 ps-12 text-[var(--text)] outline-none transition placeholder:text-[rgb(var(--muted-rgb)/0.68)] focus:border-[rgb(var(--secondary-rgb)/0.42)] focus:bg-[rgb(var(--surface-rgb)/0.72)]" />
                </span>
              </label>

              <button type="submit" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-3xl border border-[rgb(var(--secondary-rgb)/0.25)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-5 font-black text-[var(--text)] shadow-[0_18px_52px_rgb(var(--primary-rgb)/0.22),inset_0_1px_0_rgb(var(--text-rgb)/0.12)] transition hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none">
                <Send aria-hidden="true" size={18} />
                {t.form.submit}
              </button>

              <p className="text-sm leading-7 text-[rgb(var(--muted-rgb)/0.86)]">{t.form.note}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, id, label, ...props }) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-sm font-black text-[rgb(var(--text-rgb)/0.82)]">{label}</span>
      <span className="relative block">
        <Icon aria-hidden="true" size={18} className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-[rgb(var(--secondary-rgb)/0.72)]" />
        <input id={id} className="min-h-13 w-full rounded-3xl border border-[rgb(var(--secondary-rgb)/0.14)] bg-[rgb(var(--surface-rgb)/0.34)] px-4 ps-12 text-[var(--text)] outline-none transition placeholder:text-[rgb(var(--muted-rgb)/0.68)] focus:border-[rgb(var(--secondary-rgb)/0.42)] focus:bg-[rgb(var(--surface-rgb)/0.72)]" {...props} />
      </span>
    </label>
  );
}
