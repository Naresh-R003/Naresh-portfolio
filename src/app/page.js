"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { value: "1.5+", label: "Years building production apps" },
  { value: "15+", label: "Client projects delivered" },
  { value: "5", label: "Featured product builds" },
  { value: "3", label: "Web, CMS and mobile tracks" },
];

const focusAreas = [
  "Scalable React and Next.js architecture",
  "Enterprise SaaS flows and dashboards",
  "Animation-rich marketing websites",
  "Strapi CMS and REST API integration",
  "React Native mobile interfaces",
  "Performance and responsive polish",
];

const techGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Motion and UI",
    items: ["Tailwind CSS", "GSAP", "Framer Motion", "Responsive UI", "Cross-browser QA"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Multi-step flows", "Reusable UI components", "Mobile-first layouts"],
  },
  {
    title: "Backend and CMS",
    items: ["Node.js", "Express.js", "Strapi CMS", "REST APIs", "Axios"],
  },
  {
    title: "Data",
    items: ["MongoDB", "PostgreSQL", "SQL", "Chart.js", "KPI dashboards"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Postman", "AWS", "CI/CD pipelines", "Agile delivery"],
  },
];

const projects = [
  {
    title: "Techflu",
    type: "Laptop rental marketplace",
    period: "Apr 2026 - May 2026",
    stack: ["React", "Node.js", "React Native", "Tailwind CSS", "REST APIs"],
    summary:
      "A full-stack rental platform with separate customer, super admin and delivery partner flows.",
    highlights: [
      "Built product discovery, order placement, payment, KYC and live tracking experiences.",
      "Created an operations dashboard for inventory, KYC approval, cancellations and delivery assignment.",
      "Designed a delivery partner app flow with acceptance, location tracking and proof of delivery.",
    ],
    accent: "#ff7a59",
  },
  {
    title: "Lighthouse",
    type: "Luxury brand web platform",
    period: "Feb 2026 - Mar 2026",
    stack: ["Next.js", "React", "Strapi CMS", "REST APIs", "Tailwind CSS"],
    summary:
      "A premium content-led brand experience backed by custom Strapi models and dynamic rendering.",
    highlights: [
      "Led end-to-end frontend development with responsive, high-performance interfaces.",
      "Built custom CMS content models, APIs and frontend integration workflows.",
      "Delivered a polished UI system aligned with modern luxury web standards.",
    ],
    accent: "#facc15",
  },
  {
    title: "Auditee AI",
    type: "Enterprise SaaS platform",
    period: "Oct 2025 - Jan 2026",
    stack: ["React", "Chart.js", "REST APIs", "Tailwind CSS"],
    summary:
      "A complete enterprise product frontend for AI-assisted audits, onboarding and data visibility.",
    highlights: [
      "Built authentication, client selection, file upload and upload tracking modules.",
      "Created KPI dashboards with responsive chart and data visualization components.",
      "Developed onboarding flows for org hierarchy, brand, SSO, campaigns and user management.",
    ],
    accent: "#4ade80",
  },
  {
    title: "Climaty AI",
    type: "Carbon intelligence platform",
    period: "Jul 2025 - Sep 2025",
    stack: ["React", "Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    summary:
      "An interactive climate-tech interface with immersive animation and performance-minded UI sections.",
    highlights: [
      "Created animation-driven pages using GSAP and Framer Motion.",
      "Built globe visualizations, real-time mapping interfaces and responsive sections.",
      "Translated complex design concepts into production-ready frontend components.",
    ],
    accent: "#67e8f9",
  },
  {
    title: "Realm",
    type: "Interactive marketing website",
    period: "Jun 2025",
    stack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    summary:
      "A high-performance marketing website built around smooth animation, conversion flow and mobile polish.",
    highlights: [
      "Built animated sections, responsive FAQ and a contact form across all pages.",
      "Focused on smooth page transitions and clean interaction details.",
      "Delivered a fully responsive build for desktop, tablet and mobile users.",
    ],
    accent: "#c084fc",
  },
];

const contacts = [
  { label: "Email", value: "nareshrajkumar31@gmail.com", href: "mailto:nareshrajkumar31@gmail.com" },
  { label: "Phone", value: "+91 8807823339", href: "tel:+918807823339" },
  { label: "LinkedIn", value: "linkedin.com/in/naresh-r", href: "https://linkedin.com/in/naresh-r" },
  { label: "GitHub", value: "github.com/Naresh-R003", href: "https://github.com/Naresh-R003" },
];

const scrollWheelText = "SCROLL DOWN  SCROLL DOWN  ";
const introSlabs = Array.from({ length: 6 }, (_, index) => index);
const heroTitleLines = ["Frontend", "Developer"];

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="gsap-reveal mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="eyebrow mx-auto">{kicker}</p>
      <h2 className="mt-4 text-pretty text-3xl font-semibold text-[#f8f4ec] md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b8b4aa] md:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const pageRef = useRef(null);
  const [activeProject, setActiveProject] = useState(projects[0].title);

  const selectedProject = useMemo(
    () => projects.find((project) => project.title === activeProject) || projects[0],
    [activeProject]
  );

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".intro-overlay", { display: "none" });
        gsap.set(".hero-content", { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-letter-inner", { autoAlpha: 1, y: 0 });
      } else {
        gsap.set(".intro-overlay", { display: "flex", autoAlpha: 1 });
        gsap.set(".intro-slab", { scaleY: 0, transformOrigin: "50% 100%", force3D: true });
        gsap.set(".hero-content", { clipPath: "inset(0% 100% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 0, y: 28 });
        gsap.set(".hero-letter-inner", { autoAlpha: 0, y: 64 });

        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

        intro
          .to(".intro-slab", {
            scaleY: 1,
            duration: 0.72,
            ease: "power4.inOut",
            stagger: 0.075,
          })
          .to(".intro-overlay", {
            autoAlpha: 0,
            duration: 0.32,
            ease: "power2.out",
          }, ">-0.06")
          .set(".intro-overlay", { display: "none" })
          .to(".hero-content", {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.05,
            ease: "power3.inOut",
          }, "<")
          .to(".hero-title-line-0 .hero-letter-inner", {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.03,
          }, "<0.14")
          .to(".hero-title-line-1 .hero-letter-inner", {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.03,
          }, "<0.12")
          .to(".hero-load-fade", {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.06,
          }, "<0.06");

        gsap.to(".hero-background-glow", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.utils.toArray(".gsap-reveal").forEach((item) => {
        gsap.from(item, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray(".project-motion").forEach((item, index) => {
        gsap.from(item, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="portfolio-shell">
      <section id="home" className="hero-section relative overflow-hidden">
        <div className="hero-background-glow" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="intro-overlay" aria-hidden="true">
          {introSlabs.map((slab) => (
            <div key={slab} className="intro-slab" />
          ))}
        </div>

        <div className="hero-content section-width relative z-[110] flex min-h-[100svh] flex-col justify-start gap-10 pb-8 pt-28 md:pb-12 md:pt-32">
          <div className="hero-load-fade flex items-center justify-between gap-4 text-sm text-[#b8b4aa]">
            <span>Naresh Rajkumar</span>
            <a className="hero-mini-cta" href="#projects">
              Work <span aria-hidden="true">+</span>
            </a>
          </div>

          <div className="pt-6 md:pt-10">
            <h1 className="hero-title" aria-label="Frontend Developer">
              {heroTitleLines.map((line, lineIndex) => (
                <span
                  key={line}
                  className={`hero-title-line hero-title-line-${lineIndex}`}
                  aria-hidden="true"
                >
                  {[...line].map((letter, index) => (
                    <span key={`${line}-${letter}-${index}`} className="hero-letter">
                      <span className="hero-letter-inner">{letter}</span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          <div className="mt-auto grid items-end gap-10 md:grid-cols-[180px_1fr_360px]">
            <a className="scroll-wheel hero-load-fade" href="#about" aria-label="Scroll to about section">
              <span className="scroll-wheel-text" aria-hidden="true">
                {[...scrollWheelText].map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    className="scroll-wheel-letter"
                    style={{
                      "--letter-index": index,
                      "--letter-count": scrollWheelText.length,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="scroll-wheel-star" aria-hidden="true">*</span>
            </a>

            <p className="hero-load-fade max-w-xl text-base leading-7 text-[#c9c4b8] md:text-lg">
              I build production-ready SaaS dashboards, CMS-driven platforms, mobile flows and animation-rich marketing websites that feel sharp on every screen.
            </p>

            <div className="hero-status hero-load-fade">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-medium uppercase text-[#f8f4ec] md:text-3xl">
                  Open to work
                </h2>
                <span className="status-star" aria-hidden="true">*</span>
              </div>
              <p className="mt-3 text-sm text-[#b8b4aa]">Based in Bengaluru, India</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Next.js", "GSAP", "Strapi", "React Native"].map((item) => (
                  <span key={item} className="hero-skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding border-t border-[#ffffff10]">
        <div className="section-width">
          <SectionHeading kicker="About me" title="Frontend engineer for product teams that care about execution.">
            I have 1.5+ years of experience delivering production-ready interfaces across enterprise SaaS, AI products, CMS websites, mobile apps and interactive marketing builds.
          </SectionHeading>

          <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                className="metric-tile gsap-reveal"
                whileHover={{ y: -6, borderColor: "rgba(255,122,89,0.55)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <span className="text-3xl font-semibold text-[#f8f4ec]">{metric.value}</span>
                <p className="mt-2 text-sm leading-5 text-[#aaa59b]">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              className="gsap-reveal panel p-6 md:p-8"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <p className="text-lg leading-8 text-[#d8d2c5]">
                At Turbostart, I work across multiple active projects and collaborate with designers, product managers and backend teams to ship responsive, maintainable frontend systems. My strongest lane is the space where clean UI, reusable architecture and motion design meet.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item} className="flex gap-3 border border-[#ffffff10] bg-[#0b0d10] p-4">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-[#ff7a59]" />
                    <p className="text-sm leading-6 text-[#c9c4b8]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <div className="gsap-reveal panel p-6 md:p-8">
              <p className="eyebrow">Recent experience</p>
              <div className="mt-6 space-y-7">
                <div className="timeline-item">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f8f4ec]">Turbostart</h3>
                    <p className="mt-1 text-sm text-[#ffb199]">Frontend Developer - Apr 2024 to Present</p>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#b8b4aa]">
                    Building SaaS modules, CMS platforms, animated web experiences and React Native interfaces across client products.
                  </p>
                </div>
                <div className="timeline-item">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f8f4ec]">Teceze</h3>
                    <p className="mt-1 text-sm text-[#ffb199]">Frontend Developer - May 2023 to Oct 2023</p>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#b8b4aa]">
                    Developed responsive React interfaces, reusable components and API-integrated SaaS application views.
                  </p>
                </div>
                <div className="border border-[#ffffff10] bg-[#0b0d10] p-5">
                  <p className="text-sm text-[#8f8a81]">Education</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#f8f4ec]">B.Tech Information Technology</h3>
                  <p className="mt-2 text-base text-[#b8b4aa]">St. Joseph&apos;s Institute of Technology - CGPA 8.17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="section-padding">
        <div className="section-width">
          <SectionHeading kicker="Tech stack" title="The tools I use to ship reliable, animated interfaces.">
            A focused stack for product UI, marketing motion, CMS-driven rendering, mobile flows and API-heavy dashboards.
          </SectionHeading>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {techGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                className="gsap-reveal panel min-h-[220px] p-6"
                whileHover={{ y: -6, borderColor: "rgba(74,222,128,0.42)" }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-[#f8f4ec]">{group.title}</h3>
                  <span className="text-sm text-[#8f8a81]">0{groupIndex + 1}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding border-y border-[#ffffff10] bg-[#0a0b0d]">
        <div className="section-width">
          <SectionHeading kicker="Projects" title="Selected work that maps directly to hiring needs.">
            These are the builds that best show my range: marketplace flows, enterprise dashboards, CMS platforms, climate-tech visuals and animated marketing websites.
          </SectionHeading>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="project-motion panel p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#8f8a81]">{selectedProject.period}</p>
                      <h3 className="mt-3 text-3xl font-semibold text-[#f8f4ec] md:text-4xl">
                        {selectedProject.title}
                      </h3>
                      <p className="mt-2 text-base text-[#ffb199]">{selectedProject.type}</p>
                    </div>
                    <span
                      className="h-12 w-12 border"
                      style={{ backgroundColor: selectedProject.accent, borderColor: selectedProject.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-7 text-lg leading-8 text-[#d8d2c5]">{selectedProject.summary}</p>

                  <div className="mt-7 space-y-4">
                    {selectedProject.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3">
                        <span
                          className="mt-2 h-2 w-2 shrink-0"
                          style={{ backgroundColor: selectedProject.accent }}
                          aria-hidden="true"
                        />
                        <p className="text-base leading-7 text-[#b8b4aa]">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid gap-3">
              {projects.map((project) => {
                const isActive = activeProject === project.title;
                return (
                  <motion.button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProject(project.title)}
                    className={`project-motion project-button text-left ${isActive ? "is-active" : ""}`}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.99 }}
                    aria-pressed={isActive}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 shrink-0"
                        style={{ backgroundColor: project.accent }}
                        aria-hidden="true"
                      />
                      <span className="text-xl font-semibold text-[#f8f4ec]">{project.title}</span>
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-[#b8b4aa]">{project.type}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="section-width">
          <div className="gsap-reveal contact-band">
            <div className="max-w-3xl">
              <p className="eyebrow">Contact me</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f8f4ec] md:text-5xl">
                Looking for a frontend developer who can own the UI and ship?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c9c4b8]">
                I am open to frontend roles where React, Next.js, animation, dashboards and clean product execution matter. Send me the role, product context or interview details and I will get back quickly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary-dark" href="mailto:nareshrajkumar31@gmail.com">
                  Email Naresh
                </a>
                <a className="btn-secondary-dark" href="https://linkedin.com/in/naresh-r" target="_blank" rel="noreferrer">
                  LinkedIn profile
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="contact-link"
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="text-sm text-[#8f8a81]">{contact.label}</span>
                  <span className="mt-2 block text-base font-medium text-[#f8f4ec]">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
