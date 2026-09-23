import { site } from "../data/site.config";
import { MarigoldGarland } from "./Florals";

export function Invitation() {
  const { invitation, couple } = site;

  return (
    <section id="invitation" className="scroll-mt-6 px-5 py-20 pt-2">
      <div className="mx-auto max-w-2xl text-center">
        <MarigoldGarland className="mx-auto mb-10 w-full max-w-lg" />
        <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
          {invitation.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
          {invitation.heading}
        </h2>
        {invitation.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-5 text-base leading-7 text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 font-script text-4xl text-accent-deep">
          {invitation.signOff}
        </p>
        <p className="mt-1 font-display text-lg text-ink">
          {couple.partnerA} & {couple.partnerB}
        </p>
      </div>
    </section>
  );
}
