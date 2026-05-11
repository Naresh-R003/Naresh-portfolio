"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ProjectsWallSection from "../components/home/ProjectsWallSection";
import StackSection from "../components/home/StackSection";

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".intro-overlay", { display: "none" });
        gsap.set(".hero-content", { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-char", { autoAlpha: 1, y: 0 });
      } else {
        gsap.set(".intro-overlay", { display: "flex", autoAlpha: 1 });
        gsap.set(".intro-slab", { scaleY: 0, transformOrigin: "50% 100%", force3D: true });
        gsap.set(".hero-content", { clipPath: "inset(0% 100% 0% 0%)" });
        gsap.set(".hero-load-fade", { autoAlpha: 0, y: 28 });
        gsap.set(".hero-char", { autoAlpha: 0, y: 64 });

        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

        intro
          .to(".intro-slab", {
            scaleY: 1,
            duration: 0.72,
            ease: "power4.inOut",
            stagger: 0.075,
          }, 0)
          .to(".hero-content", {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.05,
            ease: "power3.inOut",
          }, 0.14)
          .to(".hero-headline-line-1 .hero-char", {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.03,
          }, 0.22)
          .to(".hero-headline-line-2 .hero-char", {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.03,
          }, 0.34)
          .to(".hero-load-fade", {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.06,
          }, 0.38)
          .to(".intro-overlay", {
            autoAlpha: 0,
            duration: 0.32,
            ease: "power2.out",
          }, 0.78)
          .set(".intro-overlay", { display: "none" }, 1.15);

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

      gsap.utils.toArray(".gsap-reveal").forEach((item) => {
        gsap.from(item, {
          y: 36,
          opacity: 0,
          duration: 1.05,
          delay: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
          },
        });
      });

      gsap.utils.toArray(".project-motion").forEach((item, index) => {
        gsap.from(item, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          delay: 0.08 + index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
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
      <ProjectsWallSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </main>
  );
}
