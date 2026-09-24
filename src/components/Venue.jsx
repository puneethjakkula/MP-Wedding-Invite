import { site } from "../data/site.config";
import { Icon } from "./Icon";

function openGoogleCalendar(venue) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: venue.calendarTitle,
    dates: `${venue.calendarStart}/${venue.calendarEnd}`,
    details: venue.calendarDescription,
    location: venue.calendarLocation,
  });

  window.open(
    `https://calendar.google.com/calendar/render?${params.toString()}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function Venue() {
  const { venue } = site;

  return (
    <section id="venue" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
            {venue.eyebrow}
          </p>

          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            {venue.heading}
          </h2>

          <p className="mt-4 font-display text-2xl text-accent-deep">
            {venue.name}
          </p>

          <address className="mt-3 not-italic leading-7 text-muted">
            {venue.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <p className="mt-5 text-sm leading-7 text-ink/80">
            {venue.directions}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-accent-deep px-5 text-sm font-medium text-page transition-colors hover:bg-accent-deep/90"
            >
              <Icon name="map" className="h-5 w-5" />
              {venue.mapsCta}
            </a>

            <button
              type="button"
              onClick={() => openGoogleCalendar(venue)}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-accent-deep px-5 text-sm font-medium text-accent-deep transition-colors hover:bg-accent-deep hover:text-page"
            >
              <Icon name="calendar" className="h-5 w-5" />
              {venue.calendarCta}
            </button>
          </div>
        </div>

        {/*
        <div className="overflow-hidden rounded-3xl border border-gold/30 bg-band/5 shadow-sm">
          {loaded ? (
            <iframe
              title={venue.mapTitle}
              src={venue.embedUrl}
              className="h-72 w-full md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="flex h-72 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-gold/20 to-accent-deep/20 px-6 text-center md:h-80"
            >
              <Icon name="place" className="h-10 w-10 text-accent-deep" />

              <span className="inline-flex min-h-11 items-center rounded-full bg-accent-deep px-5 text-sm font-medium text-page">
                {venue.loadMapLabel}
              </span>

              <span className="max-w-xs text-xs text-muted">
                {venue.facadeCaption}
              </span>
            </button>
          )}
        </div>
        */}
      </div>
    </section>
  );
}