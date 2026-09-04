import { useEffect } from "react";
import { site } from "./data/site.config";
import { scrollToHash } from "./lib/scrollToHash";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Countdown } from "./components/Countdown";
import { Lineup } from "./components/Lineup";
import { Venue } from "./components/Venue";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { MusicToggle } from "./components/MusicToggle";

export default function App() {
  useEffect(() => {
    const id = window.setTimeout(() => scrollToHash(), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <a className="skip-link" href="#invitation">
        {site.skipLink}
      </a>
      <Hero />
      <main>
        <Invitation />
        <Countdown />
        <Lineup />
        <Venue />
        <Gallery />
      </main>
      <Footer />
      <MusicToggle />
      <BottomNav />
    </>
  );
}
