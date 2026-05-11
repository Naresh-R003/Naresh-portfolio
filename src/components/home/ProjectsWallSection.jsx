"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeading from "./SectionHeading";

const rawProjects = [
  {
    title: "T20 Mumbai",
    kind: "Website",
    description: "Responsive pages (About, Stats, Fixtures, Match Center) with JSON-driven tables and layouts.",
  },
  {
    title: "MCA T20",
    kind: "Mobile App",
    description: "App build (Home, News, About, Commentary, Player Analysis) with dynamic slug-based data.",
  },
  {
    title: "Realm",
    kind: "Website",
    description: "GSAP-driven marketing sections (Who We Are, Ecosystem cards) with mobile-first polish.",
  },
  {
    title: "Pi Chain",
    kind: "Website",
    description: "Landing build with Hero/Banner/Why Pi Chain sections and responsive navigation fixes.",
  },
  {
    title: "Climaty AI",
    kind: "Website",
    description: "Complex animations + dashboard layouts across Home/Intelligence with performance tuning.",
  },
  {
    title: "Kagpatra",
    kind: "Website",
    description: "Landing page build with end-to-end mobile responsiveness across sections.",
  },
  {
    title: "Kernel",
    kind: "Website",
    description: "Second-half build completion plus responsive redesign updates and layout refinements.",
  },
  {
    title: "Ken42",
    kind: "Website",
    description: "New design rollout: landing page updates, hero/icon changes, and section builds.",
  },
  {
    title: "T2C",
    kind: "Website",
    description: "New design updates with UI refinements and iterative section improvements.",
  },
  {
    title: "Auditee AI",
    kind: "Product",
    description: "Auth → onboarding → dashboard UI, file upload flows, KPI charts, and responsive product polish.",
  },
  {
    title: "Print Buddy",
    kind: "Mobile App",
    description: "Agreement template UIs + mortgage/power-of-attorney flow with forms and document previews.",
  },
  {
    title: "Vendibite",
    kind: "Website",
    description: "Landing page layout builds, new design section work, and second-half completion.",
  },
  {
    title: "Lighthouse",
    kind: "Full-stack CMS",
    description: "Luxury site revamp: new frontend + Strapi CMS models/APIs with ongoing integrations.",
  },
];

function getCardPose(index) {
  const isEven = index % 2 === 0;
  const translateY = isEven ? -18 : 18;
  return { translateY };
}

export default function ProjectsWallSection() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const trackRef = useRef(null);

  const projects = useMemo(
    () =>
      rawProjects.map((project, index) => ({
        ...project,
        id: `${project.title}-${index}`,
        pose: getCardPose(index),
      })),
    []
  );

  useEffect(() => {
    if (!sectionRef.current || !viewportRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const content = contentRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !content || !track) return;

      const getScrollDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const getContentShift = () => 72;
      const getEndPadding = () => Math.round(Math.max(window.innerWidth * 1.1, window.innerHeight * 1.0));

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance() + getEndPadding()}`,
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      timeline.to(track, { x: () => -getScrollDistance(), ease: "none" }, 0);
      timeline.to(content, { y: () => -getContentShift(), ease: "none" }, 0);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("resize", refresh);

      return () => {
        window.removeEventListener("resize", refresh);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="progress"
      ref={sectionRef}
      className="section-padding border-y border-[#ffffff10] bg-[#0a0b0d]"
    >
      <div ref={viewportRef} className="section-width relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0b0d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0b0d] to-transparent" />

        <div ref={trackRef} className="flex items-start gap-10" style={{ willChange: "transform" }}>
          <div ref={contentRef} className="shrink-0 pt-2" style={{ width: 520 }}>
            <p className="eyebrow">Progress</p>
            <h2 className="mt-5 text-pretty text-4xl font-semibold text-white md:text-5xl">
              Projects I shipped from Apr 2025 <span className="text-white/90">→</span> Mar 2026.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-white/90 md:text-lg">
              A wall of builds across websites, mobile apps, product UI and full-stack CMS work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
              <span className="border border-[#ffffff14] bg-[#111317] px-3 py-2">Scroll to explore</span>
              <span className="border border-[#ffffff14] bg-[#111317] px-3 py-2">Zig-zag wall</span>
              <span className="border border-[#ffffff14] bg-[#111317] px-3 py-2">20+ builds</span>
            </div>
          </div>

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="shrink-0"
              style={{ width: 460 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(0.22, index * 0.02) }}
            >
                  <motion.div
                    className="group relative cursor-pointer bg-gradient-to-br from-[#ffffff26] via-[#ffffff0f] to-[#ffffff1a] p-[1px]"
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    style={{ transform: `translateY(${project.pose.translateY}px)` }}
                  >
                <div className="panel bg-[#0b0d10]/65 backdrop-blur">
                  <div className="relative aspect-[16/10] w-full">
                    <img
                      src="/projects/image.png"
                      alt={`${project.title} placeholder`}
                      className="h-full w-full object-cover transition duration-300 [filter:saturate(0.85)_contrast(1.05)_brightness(0.95)] group-hover:[filter:saturate(1)_contrast(1.05)_brightness(1)]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b99] via-transparent to-transparent" />
                  </div>

                  <div className="pt-6">
                    <div className="px-6 pb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-2 text-sm text-white/90">{project.kind}</p>
                        </div>
                        <div className="h-12 w-12 border border-[#ffffff14] bg-[#111317]" aria-hidden="true" />
                      </div>

                      <p className="mt-4 text-sm leading-6 text-white/90">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="border border-[#ffffff14] bg-[#0b0d10] px-3 py-2 text-xs font-semibold text-white">
                          2025–26
                        </span>
                        <span className="border border-[#ffffff14] bg-[#0b0d10] px-3 py-2 text-xs text-white/90">
                          Responsive UI
                        </span>
                        <span className="border border-[#ffffff14] bg-[#0b0d10] px-3 py-2 text-xs text-white/90">
                          Motion
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff14] via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.article>
          ))}

          <div className="shrink-0" style={{ width: 1 }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
