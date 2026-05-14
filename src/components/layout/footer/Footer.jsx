const footerLinks = [
  { label: "Email", href: "mailto:nareshrajkumar31@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/naresh-r" },
  { label: "GitHub", href: "https://github.com/Naresh-R003" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff10] bg-[#08090b]">
      <div className="section-width flex flex-col gap-6 py-8 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
        <p>
          2026 <span className="nordica-black tracking-[0.05em]">Naresh Rajkumar</span>. Full Stack Developer based in Bengaluru.
        </p>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
          
              key={link.href}
              href={link.href}
              className="text-white/90 transition hover:text-white"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
