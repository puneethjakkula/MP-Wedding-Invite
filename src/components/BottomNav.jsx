import { useEffect, useState } from "react";
import { navItems } from "../data/site.config";

export function BottomNav() {
  const [active, setActive] = useState(navItems[0]?.id);

  useEffect(() => {
    const getSectionFromHash = () => {
      const id = window.location.hash.replace("#", "");

      if (navItems.some((item) => item.id === id)) {
        setActive(id);
      }
    };

    const updateActiveOnScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.25;
      let current = navItems[0]?.id;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= marker) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("hashchange", getSectionFromHash);
    window.addEventListener("scroll", updateActiveOnScroll, {
      passive: true,
    });

    getSectionFromHash();
    updateActiveOnScroll();

    return () => {
      window.removeEventListener("hashchange", getSectionFromHash);
      window.removeEventListener("scroll", updateActiveOnScroll);
    };
  }, []);

  function handleClick(id) {
    setActive(id);

    // The browser will scroll to the matching section using the href.
    // This also ensures the highlight changes on the first click.
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 w-[min(100%-1rem,36rem)] -translate-x-1/2"
      aria-label="Page sections"
    >
      <div className="nav-scroll rounded-full border border-gold/30 bg-page/95 px-2 py-1 shadow-lg backdrop-blur">
        <ul className="flex min-w-max items-center justify-between gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-xs font-medium whitespace-nowrap transition-colors sm:text-sm ${
                    isActive
                      ? "bg-accent-deep text-page"
                      : "text-ink hover:bg-accent-deep/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}