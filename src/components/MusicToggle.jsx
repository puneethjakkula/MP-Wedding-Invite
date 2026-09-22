import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const hideMessageTimer = useRef(null);
  const startedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const { music } = site;

  function hideMessageAfterThreeSeconds() {
    clearTimeout(hideMessageTimer.current);

    hideMessageTimer.current = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  function showMessageForThreeSeconds() {
    setShowMessage(true);
    hideMessageAfterThreeSeconds();
  }

  function removeListeners() {
    window.removeEventListener("touchstart", tryStartMusic);
    window.removeEventListener("pointerdown", tryStartMusic);
    window.removeEventListener("wheel", tryStartMusic);
    window.removeEventListener("scroll", tryStartMusic);
    window.removeEventListener("keydown", tryStartMusic);
  }

  function tryStartMusic(event) {
    const audio = audioRef.current;

    if (!audio || startedRef.current) return;

    if (event?.target?.closest?.("[data-music-toggle]")) return;

    audio
      .play()
      .then(() => {
        startedRef.current = true;
        removeListeners();
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }

  useEffect(() => {
    hideMessageAfterThreeSeconds();

    const options = { passive: true };

    window.addEventListener("touchstart", tryStartMusic, options);
    window.addEventListener("pointerdown", tryStartMusic, options);
    window.addEventListener("wheel", tryStartMusic, options);
    window.addEventListener("scroll", tryStartMusic, options);
    window.addEventListener("keydown", tryStartMusic);

    return () => {
      removeListeners();
      clearTimeout(hideMessageTimer.current);
    };
  }, []);

  function toggle(event) {
    event.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          startedRef.current = true;
          removeListeners();
          setPlaying(true);
        })
        .catch(() => {
          setPlaying(false);
        });
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-24 z-40 flex items-center gap-2">
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showMessage ? "max-w-56 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="block whitespace-nowrap rounded-full bg-page px-3 py-2 text-xs text-accent-deep shadow-md">
          Tap to play music
        </span>
      </div>

      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        data-music-toggle
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onTouchStart={(event) => event.stopPropagation()}
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}