"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StackSection from "../components/home/StackSection";

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const introOverlay = document.querySelector(".intro-overlay");
      const introSlabs = document.querySelectorAll(".intro-slab");

      if (reduceMotion) {
        if (introOverlay) gsap.set(introOverlay, { display: "none" });
        gsap.set(".hero-content", { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-char", { autoAlpha: 1, y: 0 });
      } else {
        if (introOverlay) gsap.set(introOverlay, { display: "flex", autoAlpha: 1 });
        if (introSlabs.length) {
          gsap.set(introSlabs, { scaleY: 0, transformOrigin: "50% 100%", force3D: true });
        }
        gsap.set(".hero-content", { clipPath: "inset(0% 100% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 0, y: 28 });
        gsap.set(".hero-char", { autoAlpha: 0, y: 64 });

        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

        intro
          .to(
            introSlabs,
            {
              scaleY: 1,
              duration: 0.95,
              ease: "power4.inOut",
              stagger: 0.1,
            },
            0
          )
          .to(".hero-content", {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.35,
            ease: "power3.inOut",
          }, 0.14)
          .to(".hero-headline-line-1 .hero-char", {
            autoAlpha: 1,
            y: 0,
            duration: 1.35,
            ease: "power3.out",
            stagger: 0.065,
          }, 0.28)
          .to(".hero-headline-line-2 .hero-char", {
            autoAlpha: 1,
            y: 0,
            duration: 1.35,
            ease: "power3.out",
            stagger: 0.065,
          }, 0.44)
          .to(".hero-load-fade", {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            stagger: 0.16,
          }, 0.56)
          .to(
            introOverlay,
            {
              autoAlpha: 0,
              duration: 0.42,
              ease: "power2.out",
            },
            0.98
          )
          .set(introOverlay, { display: "none" }, 1.5);

        gsap.to(".hero-background-glow", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

      // Slower section-by-section reveals (staggered), instead of per-node reveals.
      gsap.utils.toArray("section").forEach((section) => {
        const el = section;
        const items = el.querySelectorAll(".gsap-reveal");
        if (!items.length) return;

        const isAbout = el.id === "about";
        gsap.from(items, {
          y: 42,
          opacity: 0,
          duration: isAbout ? 2.1 : 1.65,
          ease: "power3.out",
          stagger: isAbout ? 0.34 : 0.26,
          scrollTrigger: {
            trigger: el,
            start: isAbout ? "top 92%" : "top 86%",
          },
        });
      });

      gsap.utils.toArray(".project-motion").forEach((item, index) => {
        gsap.from(item, {
          y: 28,
          opacity: 0,
          duration: 1.55,
          delay: 0.25 + index * 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 92%",
          },
        });
      });

      gsap.utils.toArray(".metric-count").forEach((element) => {
        const el = element;
        const target = Number.parseFloat(el.dataset.value || "0");
        const suffix = el.dataset.suffix || "";
        const decimals = String(el.dataset.value || "").includes(".") ? 1 : 0;

        const state = { value: 0 };
        const updateText = () => {
          const formatted = decimals ? state.value.toFixed(decimals) : String(Math.round(state.value));
          el.textContent = `${formatted}${suffix}`;
        };

        const timeline = gsap.timeline({ paused: true });

        timeline.add(() => {
          const shuffleEnd = Date.now() + 240;
          const ticker = () => {
            if (Date.now() >= shuffleEnd) {
              gsap.ticker.remove(ticker);
              state.value = 0;
              updateText();
              return;
            }
            state.value = Math.random() * target;
            updateText();
          };
          gsap.ticker.add(ticker);
        }, 0);

        timeline.to(
          state,
          {
            value: target,
            duration: 0.85,
            ease: "power3.out",
            onUpdate: updateText,
          },
          0.24
        );

        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => timeline.play(0),
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="portfolio-shell">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
