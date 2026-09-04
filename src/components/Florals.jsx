import { motion, useReducedMotion } from "motion/react";

export function CornerMandala({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="14" className="fill-gold/30" />
      <motion.path
        d="M20 20 C60 20 90 40 110 70 C130 100 150 140 180 180"
        className="stroke-gold"
        strokeWidth="1.5"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M20 48 C55 48 88 72 108 102"
        className="stroke-ornament"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.path
        d="M48 20 C48 55 72 88 102 108"
        className="stroke-ornament"
        strokeWidth="1.2"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="110"
        cy="70"
        r="18"
        className="stroke-gold"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 0.4 }}
      />
      <motion.path
        d="M110 52 C118 62 118 78 110 88 C102 78 102 62 110 52 Z"
        className="stroke-accent"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.55 }}
      />
      <motion.path
        d="M92 70 C102 62 118 62 128 70 C118 78 102 78 92 70 Z"
        className="stroke-accent-deep"
        strokeWidth="1.1"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.65 }}
      />
      <circle cx="110" cy="70" r="4" className="fill-gold" />
    </svg>
  );
}

export function MarigoldGarland({ className = "" }) {
  const blooms = [40, 100, 160, 220, 280, 340, 400, 460, 520, 580];

  return (
    <svg
      className={className}
      viewBox="0 0 640 72"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 28 C90 52 180 8 320 32 C460 56 540 16 632 36"
        className="stroke-gold/70"
        strokeWidth="1.4"
      />
      {blooms.map((x, i) => {
        const y = 28 + Math.sin(i * 0.9) * 10;
        return (
          <g key={x} transform={`translate(${x} ${y})`}>
            <circle r="11" className="fill-accent" />
            <circle r="5" className="fill-gold" />
            <circle cx="-7" cy="-6" r="6" className="fill-accent-deep/80" />
            <circle cx="8" cy="-4" r="6" className="fill-accent/90" />
          </g>
        );
      })}
    </svg>
  );
}

const PETALS = [
  { left: "6%", delay: "0s", dur: "15s", drift: "18px" },
  { left: "18%", delay: "3s", dur: "18s", drift: "-22px" },
  { left: "31%", delay: "1.2s", dur: "16s", drift: "28px" },
  { left: "44%", delay: "5s", dur: "20s", drift: "-16px" },
  { left: "57%", delay: "2.4s", dur: "17s", drift: "20px" },
  { left: "69%", delay: "6.5s", dur: "19s", drift: "-26px" },
  { left: "81%", delay: "0.8s", dur: "14s", drift: "14px" },
  { left: "92%", delay: "4.1s", dur: "21s", drift: "-12px" },
];

export function FallingPetals() {
  return (
    <div className="falling-petals pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((petal) => (
        <span
          key={petal.left}
          className="petal absolute top-[-12%] block"
          style={{
            left: petal.left,
            "--delay": petal.delay,
            "--dur": petal.dur,
            "--drift": petal.drift,
          }}
        >
          <svg width="18" height="22" viewBox="0 0 18 22" className="fill-accent">
            <ellipse cx="9" cy="11" rx="6" ry="10" />
          </svg>
        </span>
      ))}
    </div>
  );
}
