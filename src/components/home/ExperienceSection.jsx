"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-[#ffffff10]"
    >
      <div className="section-width">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="gsap-reveal max-w-xl lg:sticky lg:top-0 lg:h-fit">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-semibold gradient-heading leading-[0.9] instrument-italic tracking-wider sm:text-3xl md:text-5xl">
                Experience
              </p>
              <span className="h-px w-10 bg-[#ffffff18]" aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-pretty text-base font-normal leading-tight text-white md:text-xl">
              Building impactful products across SaaS, CMS and product UI.
            </h2>

            <p className="mt-6 text-base leading-normal text-white/90 md:text-lg">
              A journey through roles and education that shaped how I build
              fast, scalable and maintainable frontend systems.
            </p>
          </div>

          <div className="gsap-reveal relative overflow-hidden border border-[#ffffff12] bg-[#0a0b0d] p-6 md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden="true"
            >
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ffffff08] blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#ffffff06] blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[72px_1fr]">
              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="absolute left-1/2 top-7 h-[calc(100%-28px)] w-px -translate-x-1/2 bg-[#ffffff14]" />
                <div className="absolute left-1/2 top-[104px] h-2 w-2 -translate-x-1/2 bg-[#ffffff30]" />
                <div className="absolute left-1/2 top-[310px] h-2 w-2 -translate-x-1/2 bg-[#ffffff30]" />
              </div>

              <div className="space-y-10">
                <article className="border-b border-[#ffffff10] pb-10">
                  <div className="grid gap-5 lg:grid-cols-[88px_1fr] lg:items-start">
                    <div className="border border-[#ffffff14] bg-[#0b0d10] px-5 py-4 text-center text-2xl font-semibold text-white">
                      01
                    </div>

                    <div>
                      <div className="flex items-center gap-4 lg:justify-start justify-center">
                        <span className="h-px w-6 bg-[#ffffff18] hidden lg:block" />
                        <h3 className="text-3xl font-semibold text-white text-center lg:text-left">
                          Turbostart
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-white/90 text-center lg:text-left">
                        Full Stack Developer{" "}
                        <span className="mx-2 text-white/40">•</span>
                        May 2025 – Present
                      </p>

                      <p className="mt-6 text-base leading-normal text-white/90 md:text-lg text-center lg:text-left">
                        Building SaaS modules, CMS platforms, animated web
                        experiences and React Native interfaces across client
                        products.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="border-b border-[#ffffff10] pb-10">
                  <div className="grid gap-5 lg:grid-cols-[88px_1fr] lg:items-start">
                    <div className="border border-[#ffffff14] bg-[#0b0d10] px-5 py-4 text-center text-2xl font-semibold text-white">
                      02
                    </div>

                    <div>
                      <div className="flex items-center gap-4 lg:justify-start justify-center">
                        <span className="h-px w-6 bg-[#ffffff18] hidden lg:block" />
                        <h3 className="text-3xl font-semibold text-white text-center lg:text-left">
                          Teceze
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-white/90 text-center lg:text-left">
                        Frontend Developer{" "}
                        <span className="mx-2 text-white/40">•</span>
                        May 2024 – Oct 2024
                         <span className="mx-2 text-white/40">•</span>
                       Full time
                      </p>

                      <p className="mt-6 text-base leading-normal text-white/90 md:text-lg text-center lg:text-left">
                        Developed responsive React interfaces, reusable
                        components and API-integrated SaaS application views.
                      </p>
                    </div>
                  </div>
                </article>

                <section className="border border-[#ffffff12] bg-[#0b0d10] p-7 md:p-8">
                  <div className="flex items-center gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      Education
                    </p>
                    <span className="h-px w-10 bg-[#ffffff18]" />
                  </div>

                  <div className="mt-7 grid gap-6 md:grid-cols-[84px_1fr] md:items-center">
                    <div className="grid h-20 w-20 place-items-center border border-[#ffffff14] bg-[#111317]">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3l10 5-10 5L2 8l10-5z"
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 10.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5"
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        B.Tech Information Technology
                      </h3>
                      <p className="mt-3 text-base text-white/90">
                        St. Joseph&apos;s Institute of Technology, Chennai
                      </p>
                      <p className="mt-3 text-sm text-white/90">CGPA 8.17</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
