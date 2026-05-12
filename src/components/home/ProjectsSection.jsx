import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

import { projects } from "../../data/projects";

function ProjectCard({ project, index, size = "lg" }) {
  const isLarge = size === "lg";
  const controls = useAnimationControls();

  return (
    <motion.article
      className="group w-full min-w-0"
      initial={{ opacity: 0, y: 26 }}
      animate={controls}
      viewport={{ once: true, amount: 0.35, margin: "-10% 0px -10% 0px" }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
            delay: Math.min(0.9, 0.22 + index * 0.14),
          },
        });
      }}
    >
      <div
        className={`relative w-full max-w-full overflow-hidden border border-[#ffffff12] bg-[#0b0d10] shadow-[0_30px_120px_rgba(0,0,0,0.45)] ${
          isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out [filter:grayscale(1)_saturate(0.9)_contrast(1.06)_brightness(0.78)] group-hover:scale-[1.02] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.06)_brightness(0.9)]"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_65%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-0 transition duration-300 ease-out group-hover:opacity-100">
          <div className="mx-auto flex w-full items-center justify-center bg-white/95 py-1.5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <span className="text-sm font-semibold tracking-wide text-[#08090b] md:text-base">
              {project.industry || project.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-base font-medium text-white md:text-lg">
          {project.title}
        </p>
        <p className="text-base font-medium text-white/90">
          ({String(index + 1).padStart(2, "0")})
        </p>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      className="section-padding overflow-hidden border-y border-[#ffffff10] bg-[#0a0b0d]"
    >
      <div className="w-full px-6 md:px-12">
       
<div  className="gsap-reveal text-center   w-full flex mb-6 flex-col mx-auto max-w-3xl">
                    <h2  className="mt-7  gradient-heading text-pretty text-3xl font-medium leading-normal md:text-5xl">
<span  className=" instrument-italic tracking-wider">Selected</span> work</h2>
<p       id="projects"
 className="text-lg pt-2 text-white/70 font-normal">
  These are the builds that best show my range: marketplace flows,
          enterprise dashboards, CMS platforms, climate-tech visuals and
          animated marketing websites.
</p></div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-20 lg:gap-y-32">
          <div className="min-w-0 lg:col-span-7">
            <ProjectCard project={projects[0]} index={0} size="lg" />
          </div>

          <div className="min-w-0 lg:col-span-4 lg:col-start-9 lg:mt-24">
            <ProjectCard project={projects[1]} index={1} size="sm" />
          </div>

          <div className="min-w-0 lg:col-span-6 lg:col-start-4">
            <ProjectCard project={projects[2]} index={2} size="lg" />
          </div>

          <div className="min-w-0 lg:col-span-4 lg:mt-24">
            <ProjectCard project={projects[3]} index={3} size="sm" />
          </div>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <ProjectCard project={projects[4]} index={4} size="lg" />
          </div>
        </div>
        <div className="gsap-reveal mt-14 flex justify-center">
          <Link
            href="/projects"
            className="clip-notch clip-notch-sm group relative inline-flex w-fit items-center justify-center overflow-visible bg-gradient-to-br from-[#ffffff26] via-[#ffffff12] to-[#ffffff1a] p-[1px] text-white"
          >
    <div className="pointer-events-none absolute left-1/2 top-full h-[80px] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-80 blur-2xl">
      <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_35%,transparent_75%)] transition-all duration-500 group-hover:opacity-100" />
    </div>

	    <span className="clip-notch clip-notch-sm relative z-10 flex items-center gap-3 border border-white/10 bg-[#0b0d10]/55 px-8 py-4 text-base font-medium backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20">
      <span className="tracking-wide">View All Projects</span>

      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
      >
        ↗
      </span>
	    </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
