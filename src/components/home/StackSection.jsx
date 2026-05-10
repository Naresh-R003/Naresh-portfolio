import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

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

export default function StackSection() {
  return (
    <section id="stack" className="section-padding">
      <div className="section-width">
        <SectionHeading kicker="Tech stack" title="The tools I use to ship reliable, animated interfaces.">
          A focused stack for product UI, marketing motion, CMS-driven rendering, mobile flows and API-heavy
          dashboards.
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
  );
}

