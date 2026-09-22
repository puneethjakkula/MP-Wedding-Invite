import { site } from "../data/site.config";
import { CornerMandala, FallingPetals } from "./Florals";

export function Hero() {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-16 text-center"
    >
      <FallingPetals />
      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-36 max-w-[42vw] md:w-56" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-36 max-w-[42vw] origin-center scale-x-[-1] md:w-56" />
      <CornerMandala className="pointer-events-none absolute bottom-16 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44" />
      <CornerMandala className="pointer-events-none absolute bottom-16 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44" />

      <p className="relative mb-6 font-display text-sm tracking-[0.28em] text-muted uppercase">
        {hero.kicker}
      </p>
      <h1 className="relative mt-4 font-script text-6xl leading-none text-accent-deep sm:text-7xl md:text-8xl">
        <span className="block">{couple.partnerA}</span>
        <span className="mx-2 text-gold">&</span>
        <span className="block">{couple.partnerB}</span>
      </h1>
      <p className="relative mt-6 font-display text-xl text-ink md:text-2xl">
        {displayDate}
      </p>
      <p className="relative mt-1 font-display text-lg text-muted">{city}</p>
      <a
        href={hero.ctaHref}
        className="relative mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-accent-deep px-7 py-3 text-sm font-medium tracking-wide text-page shadow-md"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
