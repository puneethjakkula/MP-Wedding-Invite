import { site } from "../data/site.config";
import { asset } from "../lib/asset";
// import { MarigoldGarland } from "./Florals";

export function Footer() {
  const { couple, displayDate, hashtag, footer } = site;

  return (
    <footer className="px-5 pb-32 pt-8 text-center">
      {/* <MarigoldGarland className="mx-auto mb-8 w-full max-w-md" /> */}

      <img
        src={asset("photos/WeddingLogo_MP-removebg.png")}
        alt="A beautiful wedding memory"
        className="mx-auto mb-8 h-auto w-40 object-contain"
      />

      <p className="flex items-center justify-center gap-3 font-script text-4xl text-accent-deep">
        <span>{couple.partnerA}</span>
        <span aria-hidden="true">&amp;</span>
        <span>{couple.partnerB}</span>
      </p>

      <p className="mt-2 font-display text-lg text-ink">{displayDate}</p>
      <p className="mt-2 text-sm tracking-wide text-gold">{hashtag}</p>
      <p className="mx-auto mt-5 max-w-md text-sm text-muted">
        {footer.closing}
      </p>
      <p className="mt-6 text-xs text-muted/80">{footer.crafted}</p>
    </footer>
  );
}