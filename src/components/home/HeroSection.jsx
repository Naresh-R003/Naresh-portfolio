const scrollWheelText = "SCROLL DOWN  SCROLL DOWN  ";
const introSlabs = Array.from({ length: 6 }, (_, index) => index);
const heroHeadlineLine1 = "Frontend";
const heroHeadlineLine2 = "Developer";

export default function HeroSection() {
  return (
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
          <h1
            className="pointer-events-none overflow-hidden font-bold uppercase text-white text-[56px] leading-[100%] sm:text-[72px] md:text-[96px] xl:text-[120px] 2xl:text-[150px] xl:leading-[120px] 2xl:leading-[140px]"
            aria-label="Frontend Developer"
          >
            <span className="hero-headline-line-1 inline-block whitespace-nowrap" aria-hidden="true">
              {[...heroHeadlineLine1].map((letter, index) => (
                <span key={`${heroHeadlineLine1}-${letter}-${index}`} className="hero-char">
                  {letter}
                </span>
              ))}
            </span>
            <br />
            <span
              className="hero-headline-line-2 ml-10 inline-block whitespace-nowrap"
              aria-hidden="true"
            >
              {[...heroHeadlineLine2].map((letter, index) => (
                <span key={`${heroHeadlineLine2}-${letter}-${index}`} className="hero-char">
                  {letter}
                </span>
              ))}
            </span>
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
            <span className="scroll-wheel-star" aria-hidden="true">
              *
            </span>
          </a>

          <p className="hero-load-fade max-w-xl text-base leading-7 text-[#c9c4b8] md:text-lg">
            I build production-ready SaaS dashboards, CMS-driven platforms, mobile flows and animation-rich
            marketing websites that feel sharp on every screen.
          </p>

          <div className="hero-status hero-load-fade">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium uppercase text-[#f8f4ec] md:text-3xl">Open to work</h2>
              <span className="status-star" aria-hidden="true">
                *
              </span>
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
  );
}
