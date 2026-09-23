import { site } from "../data/site.config";
import { asset } from "../lib/asset";

export function Storyboard() {
  const { storyboard } = site;

  return (
    <section id="storyboard" className="px-5 pb-20 pt-0">
      <div className="mx-auto max-w-3xl">
        {storyboard.eyebrow && (
          <p className="text-center font-display text-sm tracking-[0.28em] text-gold uppercase">
            {storyboard.eyebrow}
          </p>
        )}

        {storyboard.heading && (
          <h2 className="mt-3 text-center font-display text-4xl font-semibold md:text-5xl">
            {storyboard.heading}
          </h2>
        )}

        <ol className="relative mt-10">
          <span className="absolute top-0 bottom-0 left-5 w-px bg-gold/40" />

          {storyboard.moments.map((moment) => (
            <li
              key={moment.id}
              className="relative mb-10 pl-16 last:mb-0"
            >
              <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-page text-xl text-accent-deep shadow-sm">
                ♥
              </span>

              <article className="rounded-2xl border border-gold/25 bg-page p-5 shadow-sm">
                {moment.image && (
                  <img
                    src={asset(moment.image)}
                    alt={moment.imageAlt || ""}
                    className={`mb-4 max-w-full rounded-xl object-cover ${
                      moment.imageClass ||
                      "aspect-[4/3] w-40 sm:w-56 md:w-64"
                    }`}
                    style={{
                      objectPosition:
                        moment.imagePosition || "center center",
                    }}
                    loading="lazy"
                  />
                )}

                <p className="font-display text-xl font-semibold text-accent-deep">
                  {moment.date}
                </p>

                <p className="mt-2 text-sm leading-6 text-ink/80">
                  {moment.text}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}