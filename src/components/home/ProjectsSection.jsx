import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Techflu",
    type: "Laptop rental marketplace",
    period: "Apr 2026 - May 2026",
    stack: ["React", "Node.js", "React Native", "Tailwind CSS", "REST APIs"],
    summary: "A full-stack rental platform with separate customer, super admin and delivery partner flows.",
    highlights: [
      "Built product discovery, order placement, payment, KYC and live tracking experiences.",
      "Created an operations dashboard for inventory, KYC approval, cancellations and delivery assignment.",
      "Designed a delivery partner app flow with acceptance, location tracking and proof of delivery.",
    ],
    accent: "#f8f4ec",
  },
  {
    title: "Lighthouse",
    type: "Luxury brand web platform",
    period: "Feb 2026 - Mar 2026",
    stack: ["Next.js", "React", "Strapi CMS", "REST APIs", "Tailwind CSS"],
    summary: "A premium content-led brand experience backed by custom Strapi models and dynamic rendering.",
    highlights: [
      "Led end-to-end frontend development with responsive, high-performance interfaces.",
      "Built custom CMS content models, APIs and frontend integration workflows.",
      "Delivered a polished UI system aligned with modern luxury web standards.",
    ],
    accent: "#f8f4ec",
  },
  {
    title: "Auditee AI",
    type: "Enterprise SaaS platform",
    period: "Oct 2025 - Jan 2026",
    stack: ["React", "Chart.js", "REST APIs", "Tailwind CSS"],
    summary: "A complete enterprise product frontend for AI-assisted audits, onboarding and data visibility.",
    highlights: [
      "Built authentication, client selection, file upload and upload tracking modules.",
      "Created KPI dashboards with responsive chart and data visualization components.",
      "Developed onboarding flows for org hierarchy, brand, SSO, campaigns and user management.",
    ],
    accent: "#f8f4ec",
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
    accent: "#f8f4ec",
  },
  {
    title: "Realm",
    type: "Interactive marketing website",
    period: "Jun 2025",
    stack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    summary: "A high-performance marketing website built around smooth animation, conversion flow and mobile polish.",
    highlights: [
      "Built animated sections, responsive FAQ and a contact form across all pages.",
      "Focused on smooth page transitions and clean interaction details.",
      "Delivered a fully responsive build for desktop, tablet and mobile users.",
    ],
    accent: "#f8f4ec",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].title);
  const selectedProject = useMemo(
    () => projects.find((project) => project.title === activeProject) || projects[0],
    [activeProject]
  );

  return (
    <section id="projects" className="section-padding border-y border-[#ffffff10] bg-[#0a0b0d]">
      <div className="section-width">
        <SectionHeading kicker="Projects" title="Selected work that maps directly to hiring needs.">
          These are the builds that best show my range: marketplace flows, enterprise dashboards, CMS
          platforms, climate-tech visuals and animated marketing websites.
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
                    <p className="text-sm text-white/90">{selectedProject.period}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-2 text-base text-white/90">{selectedProject.type}</p>
                  </div>
                  <span
                    className="h-12 w-12 border"
                    style={{ backgroundColor: selectedProject.accent, borderColor: selectedProject.accent }}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-7 text-lg leading-8 text-white/90">{selectedProject.summary}</p>

                <div className="mt-7 space-y-4">
                  {selectedProject.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0"
                        style={{ backgroundColor: selectedProject.accent }}
                        aria-hidden="true"
                      />
                      <p className="text-base leading-7 text-white/90">{highlight}</p>
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
                    <span className="text-xl font-semibold text-white">{project.title}</span>
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-white/90">{project.type}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
