const scrollWheelText = "SCROLL DOWN  SCROLL DOWN  ";
const heroHeadlineLine1 = "Frontend";
const heroHeadlineLine2 = "Developer";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="hero-background-glow" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

       <div className="hero-content section-width relative z-[110] flex min-h-[100svh] flex-col justify-between gap-10 pb-8 pt-10 md:pb-12">
        <div className="hero-load-fade  text-white flex items-center justify-between gap-4 text-2xl md:text-4xl font-normal
    ">
          <span className="nordica-black font-normal tracking-[0.06em] sm:tracking-[0.08em]">
            Naresh Rajkumar
          </span>
          <a
            href="#projects"
            className="clip-notch clip-notch-sm w-fit bg-gradient-to-br from-[#ffffff26] via-[#ffffff12] to-[#ffffff1a] p-[1px] transition"
          >
            <span className="clip-notch clip-notch-sm block border border-white/10 bg-[#0b0d10]/55 px-5 py-2 text-nowrap text-lg font-medium backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
              Work <span aria-hidden="true">+</span>
            </span>
          </a>
        </div>

        <div className="flex flex-1 items-center">
          <h1
            className="nordica-black pointer-events-none overflow-hidden font-semibold uppercase text-[#ffffff] text-[44px] leading-[100%] sm:text-[60px] md:text-[96px] xl:text-[120px] 2xl:text-[150px] xl:leading-[120px] 2xl:leading-[140px]"
            aria-label="Frontend Developer"
          >
            <span className="hero-headline-line-1 inline-block whitespace-nowrap" aria-hidden="true">
              {[...heroHeadlineLine1].map((letter, index) => (
                <span
                  key={`${heroHeadlineLine1}-${letter}-${index}`}
                  className="hero-char"
                >
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
                <span
                  key={`${heroHeadlineLine2}-${letter}-${index}`}
                  className="hero-char"
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div className="grid items-end gap-10 sm:grid-cols-2 md:grid-cols-[180px_1fr_360px] md:gap-28">
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
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 14l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <div className="hidden md:block" aria-hidden="true" />

          <div className=" hero-load-fade  flex flex-col justify-end w-full">
            <div className="w-[200px]">

	            <div className="flex w-full  text-start">
	              <h2 className="text-2xl text-nowrap
	              
	              text-medium uppercase text-white md:text-3xl">Open to work</h2>
              {/* <span className="status-star" aria-hidden="true">
                *
              </span> */}    
            </div>
	            <p className="mt-1 text-sm text-white/90">Based in Bengaluru, India</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
