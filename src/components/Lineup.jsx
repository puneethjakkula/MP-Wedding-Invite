import { site } from "../data/site.config";
import { getAccent } from "../lib/accentClasses";
// import { Icon } from "./Icon";

export function Lineup() {
  const { lineup, events } = site;

  return (
    <section id="lineup" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-display text-sm tracking-[0.28em] text-gold uppercase">
          {lineup.eyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-semibold md:text-5xl">
          {lineup.heading}
        </h2>

        <ol className="relative mt-14">
          <span className="absolute top-0 bottom-0 left-4 w-px bg-gold/40 md:left-1/2 md:-translate-x-px" />
          {events.map((event, index) => {
            const accent = getAccent(event.accent);
            const right = index % 2 === 1;
            return (
              <li
                key={event.id}
                className={`relative mb-10 pl-12 md:mb-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${
                  right ? "md:text-left" : "md:text-right"
                }`}
              >
                <span
                  className={`absolute top-2 left-4 z-10 h-3 w-3 -translate-x-1.5 rounded-full ring-4 ring-page ${accent.dot} md:left-1/2`}
                />
                <article
                  className={`rounded-2xl border border-gold/25 bg-page p-5 shadow-sm ${
                    right ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                  }`}
                >
                  <h3 className={`font-display text-2xl font-semibold ${accent.text}`}>
                    {event.title}
                  </h3>
                  <p className="mt-1 font-display text-lg text-ink">
                    {event.date} · {event.time}
                  </p>
                  <p className="mt-2 text-sm text-muted">{event.venue}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/80">{event.note}</p>
                  {/* 
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-deep"
                  >
                    <Icon name="place" className="h-5 w-5" />
                    {lineup.mapsLabel}
                  </a>
                */}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
