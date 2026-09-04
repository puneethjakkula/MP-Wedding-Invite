/** Complete Tailwind class strings — never interpolate token names into class names. */
export const accentClasses = {
  marigold: {
    text: "text-amber-500",
    bg: "bg-amber-500",
    border: "border-amber-500",
    dot: "bg-amber-500",
  },
  ruby: {
    text: "text-red-500",
    bg: "bg-red-500",
    border: "border-red-500",
    dot: "bg-red-500",
  },
  emerald: {
    text: "text-emerald-500",
    bg: "bg-emerald-500",
    border: "border-emerald-500",
    dot: "bg-emerald-500",
  },
  sapphire: {
    text: "text-sky-500",
    bg: "bg-sky-500",
    border: "border-sky-500",
    dot: "bg-sky-500",
  },
  lotus: {
    text: "text-pink-500",
    bg: "bg-pink-500",
    border: "border-pink-500",
    dot: "bg-pink-500",
  },
};

export function getAccent(name) {
  return accentClasses[name] || accentClasses.marigold;
}
