const socialLinks = [
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M18.9 2H22l-6.8 7.78L23 22h-6.8l-5.3-6.86L4.8 22H2l7.3-8.37L1 2h7l4.8 6.24L18.9 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/naresh-r",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.94 6.5a2.19 2.19 0 1 1 0-4.38 2.19 2.19 0 0 1 0 4.38ZM3.8 21V8.3H10V21H3.8Zm9.9-12.7h5.96v1.74h.08c.83-1.45 2.86-2.97 5.88-2.97 6.29 0 7.45 3.5 7.45 8.05V21H24.8v-6.27c0-1.5-.03-3.43-2.48-3.43-2.48 0-2.86 1.64-2.86 3.33V21H13.7V8.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Naresh-R003",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.59 2 12.26c0 4.54 2.87 8.4 6.84 9.76.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.39-3.37-1.39-.45-1.18-1.1-1.49-1.1-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.1 9.1 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding border-t border-[#ffffff10]">
      <div className="section-width">
        <div className="gsap-reveal relative overflow-hidden border border-[#ffffff12] bg-[#0a0b0d] px-6 py-14 text-center md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#ffffff08] blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#ffffff06] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto flex items-center justify-center gap-4 text-xs text-white/60">
              <span className="h-px w-14 bg-[#ffffff18]" aria-hidden="true" />
              <p className="font-semibold italic">Reach out anytime</p>
              <span className="h-px w-14 bg-[#ffffff18]" aria-hidden="true" />
            </div>

            <h2 className="mt-7 text-pretty text-3xl font-medium leading-normal text-white md:text-5xl">
              <span className="gradient-heading">Ready to build something smarter?</span>
<br />              
              <span className="gradient-heading pt-1 font-medium">
                 Let&apos;s{" "}   <span className="instrument-italic">build together</span>  
              </span>
            </h2>

            <p className="mt-5 text-sm text-white/90 md:text-base">
              Schedule a call or drop a message — I usually reply within 24 hours.
            </p>

        <div className="mt-8 flex justify-center">
  <a
    href="mailto:nareshrajkumar31@gmail.com"
    className="group relative inline-flex items-center justify-center overflow-visible rounded-xl border border-white/10 bg-[#070707] px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:border-white/20"
  >
    {/* Bottom Glow */}
    <div className="pointer-events-none absolute left-1/2 top-full h-[80px] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-80 blur-2xl">
      <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_35%,transparent_75%)] transition-all duration-500 group-hover:opacity-100" />
    </div>

    {/* Thin Stroke Glow */}
    <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/5" />

    {/* Inner Background */}
    <div className="absolute inset-[1px] rounded-xl bg-[#050505]" />

    {/* Content */}
    <div className="relative z-10 flex items-center gap-3">
      <span className="tracking-wide">Book A Free Call</span>

      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
      >
        ↗
      </span>
    </div>
  </a>
</div>
            <div className="mt-10 flex items-center justify-center gap-6 text-white/70">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center border border-[#ffffff12] bg-[#111317] transition hover:border-[#ffffff24] hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/90">nareshrajkumar31@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
