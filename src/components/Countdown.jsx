import { useEffect, useState } from "react";
import { site } from "../data/site.config";

function remaining(iso) {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export function Countdown() {
  const { countdown, weddingDateIso } = site;
  const [parts, setParts] = useState(() => remaining(weddingDateIso));

  useEffect(() => {
    const id = setInterval(() => setParts(remaining(weddingDateIso)), 1000);
    return () => clearInterval(id);
  }, [weddingDateIso]);

  return (
    <section id="countdown" className="bg-band px-5 py-16 text-band-ink">
      <div className="mx-auto max-w-3xl text-center">
        {parts ? (
          <>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {countdown.heading}
            </h2>
            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
              {["days", "hours", "minutes", "seconds"].map((key) => (
                <div
                  key={key}
                  className="rounded-2xl border border-gold/30 bg-black/15 px-1 py-4"
                >
                  <p className="font-display text-3xl font-semibold tabular-nums sm:text-5xl">
                    {String(parts[key]).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-wide uppercase sm:text-xs">
                    {countdown.labels[key]}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {countdown.arrivedHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-band-ink/85">
              {countdown.arrivedMessage}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
