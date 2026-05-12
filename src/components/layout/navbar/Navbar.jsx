"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#ffffff12] bg-[#08090b]/88 backdrop-blur-xl">
      <nav className="section-width flex min-h-20 items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3" aria-label="Naresh Rajkumar home">
          <span className="grid h-11 w-11 place-items-center border border-[#ffffff18] bg-[#111317] text-base font-semibold text-white">
            NR
          </span>
          <span className="hidden text-sm font-medium tracking-[0.04em] text-white/90 sm:block">
            Naresh Rajkumar
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden border border-white bg-white px-4 py-3 text-sm font-semibold text-[#08090b] transition hover:bg-transparent hover:text-white md:inline-flex"
          href="mailto:nareshrajkumar31@gmail.com"
        >
          Hire me
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-[#ffffff18] bg-[#111317] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px bg-[#f8f4ec] transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px bg-[#f8f4ec] transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-[#f8f4ec] transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-[#ffffff12] bg-[#08090b] md:hidden">
          <div className="section-width grid gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border border-[#ffffff12] bg-[#111317] px-4 py-4 text-base font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:nareshrajkumar31@gmail.com"
              className="border border-white bg-white px-4 py-4 text-center text-base font-semibold text-[#08090b]"
              onClick={() => setIsOpen(false)}
            >
              Hire me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
