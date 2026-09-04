import { useEffect } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];
  const { gallery } = site;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-band/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={gallery.lightboxLabel}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-zoom-out"
        aria-label={gallery.closeLabel}
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[90dvh] w-full max-w-4xl flex-col items-center">
        <img
          src={asset(photo.src)}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          decoding="async"
          className="max-h-[78dvh] w-auto rounded-lg object-contain"
        />
        <p className="mt-3 max-w-xl text-center text-sm text-band-ink">{photo.alt}</p>
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-page text-ink"
            onClick={onPrev}
            aria-label={gallery.prevLabel}
          >
            <Icon name="chevronLeft" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-page text-ink"
            onClick={onClose}
            aria-label={gallery.closeLabel}
          >
            <Icon name="close" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-page text-ink"
            onClick={onNext}
            aria-label={gallery.nextLabel}
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
    </div>
  );
}
