import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

const techItems = [
  { name: "React", subtitle: "Core tool", icon: "/techstack/react.svg" },
  { name: "Next.js", subtitle: "Core tool", icon: "/techstack/nextjs2.svg" },
  { name: "JavaScript", subtitle: "Core tool", icon: "/techstack/js.svg" },
  { name: "TypeScript", subtitle: "Core tool", icon: "/techstack/typescript.svg" },
  { name: "Tailwind CSS", subtitle: "Styling", icon: "/techstack/tailwindcss.svg" },
  { name: "Framer Motion", subtitle: "Animation", icon: "/techstack/framer.svg" },
  { name: "GSAP", subtitle: "Animation", icon: "/techstack/gsap2.svg" },
  { name: "Node.js", subtitle: "Runtime", icon: "/techstack/nodejs.svg" },
  { name: "Express.js", subtitle: "Backend", icon: "/techstack/expressjs-icon.svg" },
  { name: "MongoDB", subtitle: "Database", icon: "/techstack/mongodb.svg" },
  { name: "PostgreSQL", subtitle: "Database", icon: "/techstack/postgresql.svg" },
  { name: "Docker", subtitle: "DevOps", icon: "/techstack/docker.svg" },
  { name: "Git", subtitle: "Version Control", icon: "/techstack/git.svg" },
  { name: "AWS", subtitle: "Cloud", icon: "/techstack/aws.svg" },
  { name: "Postman", subtitle: "API Testing", icon: "/techstack/postman.svg" },
];

function TechIcon({ src, label }) {
  return (
    <div
      className="grid h-14 w-14 place-items-center"
      title={label}
      aria-label={label}
    >
      <img
        src={src}
        alt={label}
        className="h-10 w-10 opacity-90 transition duration-200 hover:opacity-100 [filter:grayscale(1)_invert(1)_brightness(1.15)]"
        loading="lazy"
      />
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="section-padding">
      <div className="section-width">
       <div className="gsap-reveal text-center w-full flex mb-6 flex-col mx-auto max-w-3xl">
                    <h2 className="mt-7 gradient-heading text-pretty text-3xl font-medium leading-normal md:text-5xl">
 <span className="instrument-italic tracking-wider">Tech Stack</span> Used
</h2>
<p className="text-lg pt-2 text-white/70 font-normal">
    A focused stack for product UI, marketing motion, CMS-driven rendering, mobile flows and API-heavy
          dashboards.
</p></div>

        <motion.div
          className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
          }}
        >
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <TechIcon src={tech.icon} label={tech.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
