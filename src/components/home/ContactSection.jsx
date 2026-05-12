const contactEmail = "nareshrajkumar31@gmail.com";
const contactPhoneDisplay = "+91 88078 23339";
const contactPhoneHref = "tel:+918807823339";

const socialLinks = [
  {
    label: "Phone",
    href: contactPhoneHref,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 2.7 4.3 5c-.6.6-.8 1.5-.5 2.3 1.8 4.7 5.6 8.5 10.3 10.3.8.3 1.7.1 2.3-.5l2.3-2.3c.6-.6.6-1.6 0-2.2l-2-2c-.5-.5-1.2-.6-1.8-.3l-1.3.7c-.3.2-.7.2-1 0a12.7 12.7 0 0 1-4.2-4.2c-.2-.3-.2-.7 0-1l.7-1.3c.3-.6.2-1.3-.3-1.8l-2-2c-.6-.6-1.6-.6-2.2 0Z"
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
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7.5C4 6.12 5.12 5 6.5 5h11C19.88 5 21 6.12 21 7.5v9C21 17.88 19.88 19 18.5 19h-11C5.12 19 4 17.88 4 16.5v-9Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M6.5 6h11C19.43 6 20 6.57 20 7.5v9c0 .93-.57 1.5-1.5 1.5h-11C6.57 18 6 17.43 6 16.5v-9C6 6.57 6.57 6 7.5 6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m6.6 7.7 5.4 4.1c.6.45 1.4.45 2 0l5.4-4.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
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
                 Let&apos;s{" "}   <span className="instrument-italic tracking-wider">build together</span>  
              </span>
            </h2>

            <p className="mt-5 text-sm text-white/90 md:text-base">
               Drop a message — I usually reply within 24 hours.
            </p>

        <div className="mt-2 flex justify-center">
  {/* <a
    href="mailto:nareshrajkumar31@gmail.com"
    className="group relative inline-flex items-center justify-center overflow-visible rounded-xl border border-white/10 bg-[#070707] px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:border-white/20"
  >
    <div className="pointer-events-none absolute left-1/2 top-full h-[80px] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-80 blur-2xl">
      <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_35%,transparent_75%)] transition-all duration-500 group-hover:opacity-100" />
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/5" />

    <div className="absolute inset-[1px] rounded-xl bg-[#050505]" />

    <div className="relative z-10 flex items-center gap-3">
      <span className="tracking-wide">Book A Free Call</span>

      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
      >
        ↗
      </span>
    </div>
  </a> */}
</div>
            <div className="mt-10 flex items-center justify-center gap-6 text-white/70">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-11 w-11 place-items-center border border-[#ffffff12] bg-[#111317] transition hover:border-[#ffffff24] hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-2 text-sm text-white/90">
              <p>{contactEmail}</p>
              <p>{contactPhoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
