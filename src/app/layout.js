import "./globals.css";
import Footer from "../components/layout/footer/Footer";
import FooterGate from "../components/utils/FooterGate";
import SmoothScrollGate from "../components/utils/SmoothScrollGate";
import CursorFollower from "../components/utils/CursorFollower";

export const metadata = {
  title: "Naresh Rajkumar | Frontend Developer",
  description:
    "Full-stack developer portfolio for Naresh Rajkumar, showcasing React, Next.js, Node.js, PostgreSQL, GSAP, Framer Motion, SaaS dashboards, CMS platforms, and mobile interfaces.",
};

export default function RootLayout({ children }) {
  const introSlabs = Array.from({ length: 6 }, (_, index) => index);

  return (
    <html lang="en">
      <body>
        {/* Keep fixed layers OUTSIDE the transformed smooth-scroll content. */}
        <div className="intro-overlay" aria-hidden="true">
          {introSlabs.map((slab) => (
            <div key={slab} className="intro-slab" />
          ))}
        </div>

        <CursorFollower />

        {/* <Navbar /> */}

        <SmoothScrollGate smooth={3} anchorOffset={96}>
          {children}
          <FooterGate>
            <Footer />
          </FooterGate>
        </SmoothScrollGate>
      </body>
    </html>
  );
}
