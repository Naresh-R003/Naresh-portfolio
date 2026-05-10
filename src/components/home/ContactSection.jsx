import SectionHeading from "./SectionHeading";

const contacts = [
  { label: "Email", value: "nareshrajkumar31@gmail.com", href: "mailto:nareshrajkumar31@gmail.com" },
  { label: "Phone", value: "+91 8807823339", href: "tel:+918807823339" },
  { label: "LinkedIn", value: "linkedin.com/in/naresh-r", href: "https://linkedin.com/in/naresh-r" },
  { label: "GitHub", value: "github.com/Naresh-R003", href: "https://github.com/Naresh-R003" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-width">
        <div className="gsap-reveal contact-band">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact me</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f8f4ec] md:text-5xl">
              Looking for a frontend developer who can own the UI and ship?
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#c9c4b8]">
              I am open to frontend roles where React, Next.js, animation, dashboards and clean product
              execution matter. Send me the role, product context or interview details and I will get back
              quickly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary-dark" href="mailto:nareshrajkumar31@gmail.com">
                Email Naresh
              </a>
              <a
                className="btn-secondary-dark"
                href="https://linkedin.com/in/naresh-r"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className="contact-link"
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="text-sm text-[#8f8a81]">{contact.label}</span>
                <span className="mt-2 block text-base font-medium text-[#f8f4ec]">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

