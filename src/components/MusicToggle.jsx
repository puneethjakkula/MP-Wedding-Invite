import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);
  const hideMessageTimer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { music } = site;

  function removeInteractionListeners() {
    window.removeEventListener("pointerdown", startMusic);
    window.removeEventListener("keydown", startMusic);
  }

  function showMessageForThreeSeconds() {
    setShowMessage(true);

    clearTimeout(hideMessageTimer.current);

    hideMessageTimer.current = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  function startMusic() {
    const audio = audioRef.current;

    if (!audio || hasInteracted.current) return;

    hasInteracted.current = true;
    removeInteractionListeners();

    audio
      .play()
      .then(() => {
        setPlaying(true);
        showMessageForThreeSeconds();
      })
      .catch(() => {
        // The browser or audio file prevented playback.
        setPlaying(false);
      });
  }

  useEffect(() => {
    window.addEventListener("pointerdown", startMusic, {
      passive: true,
    });

    window.addEventListener("keydown", startMusic);

    return () => {
      removeInteractionListeners();
      clearTimeout(hideMessageTimer.current);
    };
  }, []);

  function toggle(event) {
    // Prevent the global pointer event from interfering with the button.
    event.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    hasInteracted.current = true;
    removeInteractionListeners();

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          showMessageForThreeSeconds();
        })
        .catch(() => {
          setPlaying(false);
        });
    } else {
      audio.pause();
      setPlaying(false);
      setShowMessage(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-24 z-40 flex items-center gap-2">
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showMessage ? "max-w-52 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="block whitespace-nowrap rounded-full bg-page px-3 py-2 text-xs text-accent-deep shadow-md">
          Tap to pause the music
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
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
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