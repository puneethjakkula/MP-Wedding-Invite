import { useEffect, useState } from "react";
import { navItems } from "../data/site.config";

export function BottomNav() {
  const [active, setActive] = useState(navItems[0]?.id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-xs font-medium whitespace-nowrap sm:text-sm ${
                    isActive ? "bg-accent-deep text-page" : "text-ink"
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
