import { motion } from "framer-motion";

const metrics = [
  { value: 1.5, suffix: "+", label: "Years building production apps" },
  { value: 15, suffix: "+", label: "Client projects delivered" },
  { value: 5, suffix: "", label: "Featured product builds" },
  { value: 3, suffix: "", label: "Web, CMS and mobile tracks" },
];

const focusAreas = [
  "Scalable React & Next.js",
  "Enterprise SaaS & Dashboards",
  "Animation-Rich Websites",
  "Strapi CMS & REST APIs",
  "React Native Interfaces",
  "Performance & Responsiveness",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding border-t border-[#ffffff10]">
      <div className="section-width">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-12">
          <div className="gsap-reveal flex h-full flex-col">
         

            <h2 className="mt-10 text-4xl gradient-heading font-medium  leading-[0.9] sm:text-4xl lg:text-6xl">
            <span className="instrument-italic leading-[0.9] tracking-wider">About</span>  
              <br />
              Me
            </h2>
            <p className="mt-6 text-base leading-6 text-white/90">
              Building fast, scalable and delightful digital experiences.
            </p>

          
          </div>

          <motion.aside
            className="gsap-reveal relative w-full lg:-mt-2 lg:h-full"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="bg-gradient-to-br from-[#ffffff26] via-[#ffffff0f] to-[#ffffff1a] p-[1px] [clip-path:polygon(0_0,92%_0,100%_9%,100%_100%,8%_100%,0_92%)]">
              <div className="bg-[#0b0d10] [clip-path:polygon(0_0,92%_0,100%_9%,100%_100%,8%_100%,0_92%)]">
                <div className="relative aspect-[4/6] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]">
                  <img
                    src="/about/hero.jpeg"
                    alt="Naresh Rajkumar portrait"
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090bcc] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="gsap-reveal flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Who I am</p>
            <h3 className="mt-6 text-pretty text-base font-normal leading-tight text-white md:text-xl">
              I&apos;m a frontend developer with 1.5+ years of experience crafting production-ready UIs across
              SaaS platforms, AI products, CMS websites, mobile apps and marketing builds.
            </h3>
            <p className="mt-8 text-base leading-normal text-white/90">
              I thrive in fast-moving environments where clean UI, scalable architecture and motion come
              together to create impact.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-auto">
              {focusAreas.map((item) => (
                <motion.div
                  key={item}
                  className="group relative"
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div className="bg-gradient-to-br from-[#ffffff26] via-[#ffffff12] to-[#ffffff1a] p-[1px] [clip-path:polygon(0_0,92%_0,100%_16%,100%_100%,8%_100%,0_84%)]">
                    <div className="border border-[#ffffff14] bg-[#0b0d10] px-5 py-4 transition-colors duration-300 [clip-path:polygon(0_0,92%_0,100%_16%,100%_100%,8%_100%,0_84%)] group-hover:border-[#ffffff28]">
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#ffffff10] pt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="gsap-reveal border-l border-[#ffffff12] pl-6 first:border-l-0 first:pl-0"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  0{index + 2}
                </p>
                <p className="mt-4 text-4xl font-semibold text-white">
                  <span className="metric-count" data-value={metric.value} data-suffix={metric.suffix}>
                    0{metric.suffix}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-white/90">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
