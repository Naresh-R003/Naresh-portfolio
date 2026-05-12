"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "../../data/projects";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14 19 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#ffffff12] bg-transparent px-3 py-1 text-[11px] font-semibold text-white/75">
      {children}
    </span>
  );
}

function SidebarCard({ title, children }) {
  return (
    <section className="mb-6 rounded-2xl bg-[#0b0d10]/55 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function AtAGlanceItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 pt-0 ">
      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#ffffff12] bg-[#0b0d10] text-white/70">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold  tracking-normal text-white/60">
          {label}
        </p>
        <p className="mt-1 text-[11px] font-medium text-white/85">{value}</p>
      </div>
    </div>
  );
}

function SectionNav({ items }) {
  return (
    <nav className="no-scrollbar flex gap-8 overflow-auto border-b border-[#ffffff10] pb-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function CaseStudySection({ project }) {
  if (!project?.caseStudy) return null;

  return (
    <div className="mt-10  space-y-6">
      {project.caseStudy.metrics?.length ? (
        <section id="impact" className="scroll-mt-28 rounded-2xl bg-[#0b0d10]/45 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
          <p className="text-xs font-semibold text-white">Impact Metrics</p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {project.caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-[#0b0d10]/60 p-5"
              >
                <p className="text-xs font-semibold  tracking-[0.18em] text-white/60">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm font-semibold text-white">{metric.value}</p>
                <p className="mt-3 text-[11px] leading-normal text-white/70">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.caseStudy.architecture?.length ? (
        <section id="architecture" className="scroll-mt-28 rounded-2xl bg-[#0b0d10]/45 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
          <p className="text-sm font-semibold text-white">Architecture</p>
          <ul className="mt-5 space-y-3 text-base text-white/90">
            {project.caseStudy.architecture.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.caseStudy.challenges?.length ? (
        <section id="challenges" className="scroll-mt-28 rounded-2xl bg-[#0b0d10]/45 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
          <p className="text-sm font-semibold text-white">Challenges</p>
          <div className="mt-5 space-y-4">
            {project.caseStudy.challenges.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#0b0d10]/60 p-5">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm font-semibold text-white/70">Problem</p>
                <p className="mt-2 text-base leading-7 text-white/90">{item.problem}</p>
                <p className="mt-4 text-sm font-semibold text-white/70">Solution</p>
                <p className="mt-2 text-base leading-7 text-white/90">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSlug = useMemo(() => searchParams.get("p") || projects[0]?.slug, [searchParams]);
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  useEffect(() => {
    // Prevent carrying over scroll position from the home page (App Router keeps scroll by default).
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const slugFromUrl = searchParams.get("p");
    if (!slugFromUrl) return;
    setActiveSlug(slugFromUrl);
  }, [searchParams]);

  const active = useMemo(() => getProjectBySlug(activeSlug), [activeSlug]);

  const subNavItems = useMemo(() => {
    const items = [{ id: "overview", label: "Overview" }];
    if (active.caseStudy?.architecture?.length) items.push({ id: "architecture", label: "Architecture" });
    if (active.caseStudy?.challenges?.length) items.push({ id: "challenges", label: "Challenges" });
    if (active.caseStudy?.metrics?.length) items.push({ id: "impact", label: "Impact" });
    return items;
  }, [active.caseStudy]);

  const selectProject = (slug) => {
    setActiveSlug(slug);
    router.replace(`/projects?p=${encodeURIComponent(slug)}`, { scroll: false });
  };

  const heroStagger = {
    hidden: { opacity: 0, y: 14 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.18 + i * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <main className="portfolio-shell">
      <header className="fixed left-0 right-0 top-0 z-[240] border-b border-[#ffffff12] bg-[#0b0d10]/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-8">
          <p className="nordica-black text-xs font-semibold uppercase text-white/75">
            Naresh Rajkumar
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>
      </header>

      <aside className="force-motion fixed left-5 top-24 z-[220] hidden h-[calc(100vh-120px)] w-[min(86vw,300px)] overflow-hidden rounded-2xl border border-[#ffffff12] bg-[#0b0d10]/55 backdrop-blur md:left-8 md:top-24 md:h-[calc(100vh-128px)] lg:flex lg:flex-col">
        <div className="border-b border-[#ffffff12] px-5 py-4">
          <p className="text-sm font-semibold text-white">Project list</p>
        </div>
        <div className="no-scrollbar min-h-0 flex-1 overflow-auto p-2">
          {projects.map((project, index) => {
            const isActive = project.slug === activeSlug;
            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => selectProject(project.slug)}
                className={`group w-full border border-transparent px-4 py-4 text-left transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "border-[#ffffff20] bg-transparent text-white"
                    : "text-white/70 hover:bg-transparent hover:text-white/90"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="relative">
                      <span
                        className="absolute left-0 top-1/2 h-9 w-9 -translate-y-1/2 -translate-x-4 overflow-hidden border border-white/10 bg-[#0a0b0d] opacity-0 shadow-[0_16px_50px_rgba(0,0,0,0.0)] transition-[opacity,transform,box-shadow] delay-150 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform transform-gpu group-hover:translate-x-0 group-hover:opacity-100 group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.35)]"
                        aria-hidden="true"
                      >
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-cover [filter:saturate(0.95)_contrast(1.05)_brightness(0.85)]"
                          />
                        ) : null}
                      </span>

                      <p className="translate-x-0 truncate text-base font-semibold transition-transform delay-150 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform transform-gpu group-hover:translate-x-12">
                        {project.title}
                      </p>
                    </div>

                    <p className="mt-2 text-xs text-white/55">{project.type}</p>
                  </div>
                  <p className="shrink-0 text-xs font-semibold text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="border-t border-[#ffffff12] p-5">
          <p className="text-sm font-semibold text-white">Have a project in mind?</p>
          <p className="mt-2 text-xs text-white/70">
            Let&apos;s build something great together.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white"
          >
            Contact me
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </aside>

      <section className="">
        <div className="px-5 pt-24 md:px-8">
          {/* Mobile: show all projects stacked, no menu */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Projects
              </p>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b0d10]/80 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:text-white"
              >
                Back to home
              </Link>
            </div>

            <div className="">
              {projects.map((project) => (
                <section
                  key={project.slug}
                  id={project.slug}
                  className="relative overflow-hidden border border-[#ffffff10] bg-transparent p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ffffff08] blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#ffffff06] blur-3xl" />
                  </div>

                  <div className="relative">
                    {project.image ? (
                      <div className="mb-6 overflow-hidden border border-[#ffffff10] bg-transparent">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="100vw"
                            className="object-cover [filter:saturate(0.9)_contrast(1.06)_brightness(0.82)]"
                            priority={false}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10cc] via-transparent to-transparent" />
                        </div>
                      </div>
                    ) : null}

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      {project.period}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/80">{project.type}</p>
                    {project.role ? (
                      <p className="mt-2 text-sm font-semibold text-white/80">
                        Role: <span className="font-normal text-white/80">{project.role}</span>
                      </p>
                    ) : null}

                    {(project.stack || []).length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(project.stack || []).slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-[#ffffff12] bg-[#0b0d10] px-3 py-1 text-[11px] font-semibold text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                      {project.href || project.links?.length ? (
                        <div className="flex flex-wrap gap-3">
                          {project.href ? (
                            <Link
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:text-white"
                            >
                              Visit project
                              <ExternalLinkIcon />
                            </Link>
                          ) : null}
                          {(project.links || []).map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:text-white"
                            >
                              {link.label}
                              <ExternalLinkIcon />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                        Summary
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/90">
                        {project.caseStudy?.overview || project.summary}
                      </p>
                    </div>

                    {project.highlights?.length ? (
                      <div className="mt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                          Highlights
                        </p>
                        <ul className="mt-3 space-y-3 text-base text-white/90">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {(project.stack || []).length ? (
                      <div className="mt-6 border border-[#ffffff10] bg-transparent p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                          Stack
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(project.stack || []).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full border border-[#ffffff12] bg-[#0b0d10] px-3 py-1 text-xs font-semibold text-white/85"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {project.impact ? (
                      <div className="mt-6 border border-[#ffffff10] bg-transparent p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                          Impact
                        </p>
                        <p className="mt-3 text-base leading-7 text-white/90">{project.impact}</p>
                      </div>
                    ) : null}

                    <CaseStudySection project={project} />
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Desktop: side menu + single active details panel */}
          <div className="hidden lg:block lg:pl-[320px]">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
              <section className="overflow-hidden rounded-3xl bg-[#0b0d10]/45 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur">
                <motion.div
                  key={activeSlug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden bg-[#0b0d10]"
                >
                  {active.image ? (
                    <Image
                      src={active.image}
                      alt={`${active.title} preview`}
                      fill
                      sizes="(min-width: 1280px) 900px, 100vw"
                      className="object-cover object-right [filter:saturate(0.95)_contrast(1.08)_brightness(0.75)]"
                      priority={false}
                    />
                  ) : null}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0d10] via-[#0b0d10dd] to-[#0b0d1020]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10cc] via-transparent to-transparent" />

                  <div className="relative z-10 h-[200px] p-7 md:min-h-[400px] lg:p-8">
                    <div className="max-w-[420px]">
                      <motion.p
                        variants={heroStagger}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
                      >
                        {active.period}
                      </motion.p>

                      <motion.h1
                        variants={heroStagger}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        className="mt-4 text-5xl font-semibold leading-none tracking-[-0.04em] text-white lg:text-6xl"
                      >
                        {active.title}
                      </motion.h1>

                      <motion.p
                        variants={heroStagger}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="mt-3 text-base text-white/65"
                      >
                        {active.type}
                      </motion.p>

                      {active.summary ? (
                        <motion.p
                          variants={heroStagger}
                          initial="hidden"
                          animate="show"
                          custom={3}
                          className="mt-5 text-sm leading-6 text-white/75"
                        >
                          {active.summary}
                        </motion.p>
                      ) : null}

                      {(active.stack || []).length ? (
                        <motion.div
                          variants={heroStagger}
                          initial="hidden"
                          animate="show"
                          custom={4}
                          className="mt-6 flex flex-wrap gap-2.5"
                        >
                          {(active.stack || []).slice(0, 8).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </motion.div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>

                <div className="sticky top-20 z-20 border-t border-[#ffffff10] bg-[#0b0d10]/45 px-8 pt-5 backdrop-blur">
                  <SectionNav items={subNavItems} />
                </div>

                <div className="p-8">
                  {active.caseStudy?.overview || active.summary ? (
                    <section
                      id="overview"
                      className="scroll-mt-28 rounded-2xl border border-[#ffffff12] bg-[#0b0d10]/60 p-6 backdrop-blur"
                    >
                      <p className="text-sm font-semibold text-white">Project Overview</p>
                      <p className="mt-4 text-base leading-7 text-white/90">
                        {active.caseStudy?.overview || active.summary}
                      </p>
                    </section>
                  ) : null}

                  {active.highlights?.length ? (
                    <section className="mt-6 rounded-2xl border border-[#ffffff12] bg-[#0b0d10]/60 p-6 backdrop-blur">
                      <p className="text-sm font-semibold text-white">Highlights</p>
                      <ul className="mt-5 grid gap-4 lg:grid-cols-2">
                        {active.highlights.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-white/90">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {active.impact ? (
                    <section className="mt-6 rounded-2xl border border-[#ffffff12] bg-[#0b0d10]/60 p-6 backdrop-blur">
                      <p className="text-sm font-semibold text-white">Impact</p>
                      <p className="mt-4 text-base leading-7 text-white/90">{active.impact}</p>
                    </section>
                  ) : null}

                  <CaseStudySection project={active} />
                </div>
              </section>

              <aside className="no-scrollbar xl:sticky xl:top-24 xl:h-[calc(100vh-128px)] xl:overflow-auto">
                <SidebarCard title="Project at a glance">
                  <div className="space-y-2">
                    <AtAGlanceItem
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      }
                      label="Role"
                      value={active.role || "—"}
                    />
                    <AtAGlanceItem
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      }
                      label="Duration"
                      value={active.period || "—"}
                    />
                    <AtAGlanceItem
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      }
                      label="Industry"
                      value={active.industry || active.type || "—"}
                    />
                   
                    <AtAGlanceItem
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M10 13a5 5 0 0 1 0-7l1.4-1.4a5 5 0 0 1 7 7L17 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M14 11a5 5 0 0 1 0 7L12.6 19.4a5 5 0 0 1-7-7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      }
                      label="Live project"
                      value={active.href ? "Available" : "Private"}
                    />
                  </div>

                  {active.href || active.links?.length ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {active.href ? (
                        <Link
                          href={active.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white"
                        >
                          Visit project
                          <ExternalLinkIcon />
                        </Link>
                      ) : null}
                      {(active.links || []).map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white"
                        >
                          {link.label}
                          <ExternalLinkIcon />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </SidebarCard>

                {/* Impact metrics removed from sidebar */}
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
