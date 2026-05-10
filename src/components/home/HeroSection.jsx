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

      <div className="hero-content section-width relative z-[110] flex min-h-[100svh] flex-col justify-start gap-10 pb-8 pt-10 md:pb-12">
        <div className="hero-load-fade flex items-center justify-between gap-4 text-4xl font-extralight
         text-[#ffffff]">
          <span>Naresh Rajkumar</span>
          <a className="font-normal text-lg py-2 px-4 border rounded-full" href="#projects">
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

        <div className=" grid mt-auto items-start gap-28 md:grid-cols-[180px_1fr_360px]">
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
          
          </p>

          <div className=" hero-load-fade  flex flex-col justify-end w-full">
            <div className="w-[200px]">

            <div className="flex w-full  text-start">
              <h2 className="text-2xl text-nowrap
              
              text-medium uppercase text-[#f8f4ec] md:text-3xl">Open to work</h2>
              {/* <span className="status-star" aria-hidden="true">
                *
              </span> */}    
            </div>
            <p className="mt-1 text-sm text-[#b8b4aa]">Based in Bengaluru, India</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
