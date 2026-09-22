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

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio || hasInteracted.current) return;

      hasInteracted.current = true;
      removeListeners();

      audio.play().then(
        () => {
          setPlaying(true);
          showHint();
        },
        () => setPlaying(false),
      );
    };

    const removeListeners = () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    const showHint = () => {
      setShowMessage(true);

      clearTimeout(hideMessageTimer.current);
      hideMessageTimer.current = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      removeListeners();
      clearTimeout(hideMessageTimer.current);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(
        () => {
          setPlaying(true);
          showMessageForThreeSeconds();
        },
        () => setPlaying(false),
      );
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function showMessageForThreeSeconds() {
    setShowMessage(true);
    clearTimeout(hideMessageTimer.current);
    hideMessageTimer.current = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
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

      <audio ref={audioRef} src={asset(music.src)} preload="auto" loop />

      <button
        type="button"
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