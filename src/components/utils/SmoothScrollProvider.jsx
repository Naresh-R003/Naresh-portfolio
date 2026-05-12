"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * GSAP-based smooth scrolling for the entire app.
 * - Keeps native scrollbar on <body> (accessibility-friendly)
 * - Translates a single content container for smoothing
 * - Proxies ScrollTrigger so scroll-based animations stay accurate
 */
export default function SmoothScrollProvider({
  children,
  smooth = 3,
  anchorOffset = 96,
}) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

    const previous = {
      htmlOverflow: document.documentElement.style.overflow,
      htmlHeight: document.documentElement.style.height,
      bodyOverflow: document.body.style.overflow,
      bodyHeight: document.body.style.height,
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // Don't scroll-jack when the user prefers reduced motion.
      wrapper.style.position = "static";
      wrapper.style.inset = "auto";
      wrapper.style.overflow = "visible";
      wrapper.style.height = "auto";
      content.style.transform = "";
      return () => {
        wrapper.removeAttribute("style");
      };
    }

    // Ensure we don't keep an old instance around across soft navigations.
    ScrollSmoother.get()?.kill();

    let smoother;
    try {
      smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth,
        smoothTouch: 1.35,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    } catch {
      // Fail open: if ScrollSmoother can't initialize for any reason,
      // restore normal document flow so the page remains scrollable.
      wrapper.style.position = "static";
      wrapper.style.inset = "auto";
      wrapper.style.overflow = "visible";
      wrapper.style.height = "auto";
      content.style.transform = "";
      return () => {
        wrapper.removeAttribute("style");
        content.removeAttribute("style");
      };
    }

    // Smooth anchor jumps (and keep ScrollTrigger in sync).
    const onDocumentClick = (event) => {
      const link = event.target?.closest?.('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      smoother.scrollTo(target, true, `top top+=${anchorOffset}`);
    };

    document.addEventListener("click", onDocumentClick);

    const revealCtx = gsap.context(() => {
      const revealTargets = gsap.utils.toArray(".gsap-reveal");
      if (!revealTargets.length) return;

      gsap.set(revealTargets, { autoAlpha: 0, y: 24 });

      ScrollTrigger.batch(revealTargets, {
        id: "reveal",
        start: "top 72%",
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 24,
            duration: 0.7,
            ease: "power2.inOut",
            stagger: 0.06,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: 24,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.06,
            overwrite: true,
          }),
        once: false,
      });
    }, content);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onDocumentClick);
      revealCtx?.revert();
      smoother?.kill();
      ScrollSmoother.get()?.kill();
      ScrollTrigger.normalizeScroll(false);
      ScrollTrigger.refresh();

      wrapper.removeAttribute("style");
      content.style.transform = "";
      content.removeAttribute("style");

      document.documentElement.style.overflow = previous.htmlOverflow;
      document.documentElement.style.height = previous.htmlHeight;
      document.body.style.overflow = previous.bodyOverflow;
      document.body.style.height = previous.bodyHeight;
    };
  }, [smooth, anchorOffset]);

  return (
    <div ref={wrapperRef} className="gsap-smooth-wrapper">
      <div ref={contentRef} className="gsap-smooth-content">
        {children}
      </div>
    </div>
  );
}
