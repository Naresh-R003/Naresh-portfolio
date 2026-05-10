import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

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

export default function AboutSection() {
  return (
    <section id="about" className="section-padding border-t border-[#ffffff10]">
      <div className="section-width">
        <SectionHeading kicker="About me" title="Frontend engineer for product teams that care about execution.">
          I have 1.5+ years of experience delivering production-ready interfaces across enterprise SaaS, AI
          products, CMS websites, mobile apps and interactive marketing builds.
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
              At Turbostart, I work across multiple active projects and collaborate with designers, product
              managers and backend teams to ship responsive, maintainable frontend systems. My strongest lane
              is the space where clean UI, reusable architecture and motion design meet.
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
                  Building SaaS modules, CMS platforms, animated web experiences and React Native interfaces
                  across client products.
                </p>
              </div>
              <div className="timeline-item">
                <div>
                  <h3 className="text-xl font-semibold text-[#f8f4ec]">Teceze</h3>
                  <p className="mt-1 text-sm text-[#ffb199]">Frontend Developer - May 2023 to Oct 2023</p>
                </div>
                <p className="mt-4 text-base leading-7 text-[#b8b4aa]">
                  Developed responsive React interfaces, reusable components and API-integrated SaaS
                  application views.
                </p>
              </div>
              <div className="border border-[#ffffff10] bg-[#0b0d10] p-5">
                <p className="text-sm text-[#8f8a81]">Education</p>
                <h3 className="mt-2 text-xl font-semibold text-[#f8f4ec]">B.Tech Information Technology</h3>
                <p className="mt-2 text-base text-[#b8b4aa]">
                  St. Joseph&apos;s Institute of Technology - CGPA 8.17
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

