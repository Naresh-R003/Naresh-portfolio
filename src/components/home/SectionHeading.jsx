export default function SectionHeading({ kicker, title, children }) {
  return (
    <div className="gsap-reveal mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="eyebrow mx-auto">{kicker}</p>
      <h2 className="mt-4 text-pretty text-3xl font-semibold text-[#f8f4ec] md:text-5xl">{title}</h2>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b8b4aa] md:text-lg">{children}</p>
      ) : null}
    </div>
  );
}

