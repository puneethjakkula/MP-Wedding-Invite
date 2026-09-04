import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const photosDir = join(root, "public", "photos");
const musicDir = join(root, "public", "music");
mkdirSync(photosDir, { recursive: true });
mkdirSync(musicDir, { recursive: true });

const palettes = [
  ["#faf3e8", "#e09a1a", "#9b1d2a", "#c9a227"],
  ["#fde8ea", "#c41e3a", "#7a1024", "#c9a227"],
  ["#e7f5ea", "#0f7a4a", "#14532d", "#c9a227"],
  ["#e8eef8", "#1e4d8c", "#1e3a5f", "#c9a227"],
  ["#fde8f0", "#c2185b", "#831843", "#c9a227"],
  ["#fff7ed", "#d97706", "#9a3412", "#ca8a04"],
  ["#f5f3ff", "#7c3aed", "#5b21b6", "#c9a227"],
  ["#ecfeff", "#0e7490", "#155e75", "#c9a227"],
];

function photoSvg(index, [bg, a, b, gold]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img">
  <rect width="800" height="600" fill="${bg}"/>
  <circle cx="160" cy="140" r="90" fill="${a}" opacity="0.55"/>
  <circle cx="640" cy="460" r="120" fill="${b}" opacity="0.45"/>
  <circle cx="400" cy="300" r="70" fill="${gold}" opacity="0.7"/>
  <path d="M400 210 C430 250 430 350 400 390 C370 350 370 250 400 210 Z" fill="${a}"/>
  <path d="M310 300 C350 270 450 270 490 300 C450 330 350 330 310 300 Z" fill="${b}"/>
  <text x="400" y="540" text-anchor="middle" font-size="28" fill="${b}" font-family="Georgia, serif">Portrait ${index}</text>
</svg>
`;
}

palettes.forEach((palette, i) => {
  const n = String(i + 1).padStart(2, "0");
  writeFileSync(join(photosDir, `${n}.svg`), photoSvg(n, palette));
});

writeFileSync(
  join(root, "public", "og-image.svg"),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf3e8"/>
  <circle cx="140" cy="120" r="160" fill="#e09a1a" opacity="0.35"/>
  <circle cx="1080" cy="520" r="180" fill="#9b1d2a" opacity="0.28"/>
  <text x="600" y="250" text-anchor="middle" font-size="42" fill="#c9a227" font-family="Georgia, serif">Together with their families</text>
  <text x="600" y="360" text-anchor="middle" font-size="92" fill="#9b1d2a" font-family="Georgia, serif">Meera &amp; Arjun</text>
  <text x="600" y="440" text-anchor="middle" font-size="36" fill="#3b2418" font-family="Georgia, serif">12 December 2026 · Jaipur</text>
  <text x="600" y="510" text-anchor="middle" font-size="28" fill="#c9a227" font-family="Georgia, serif">#MeeraWedsArjun</text>
</svg>
`,
);

writeFileSync(
  join(root, "public", "favicon.svg"),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#faf3e8"/>
  <circle cx="16" cy="16" r="7" fill="#e09a1a"/>
  <circle cx="16" cy="16" r="3" fill="#c9a227"/>
</svg>
`,
);

function writeWav(filePath, seconds = 10) {
  const sampleRate = 22050;
  const n = sampleRate * seconds;
  const data = Buffer.alloc(n * 2);
  for (let i = 0; i < n; i += 1) {
    const t = i / sampleRate;
    const env = Math.min(1, t * 3) * Math.min(1, (seconds - t) * 0.5);
    const sample =
      Math.sin(2 * Math.PI * 392 * t) * 0.12 +
      Math.sin(2 * Math.PI * 493.88 * t) * 0.1 +
      Math.sin(2 * Math.PI * 587.33 * t) * 0.08;
    data.writeInt16LE(Math.max(-1, Math.min(1, sample * env)) * 28000, i * 2);
  }
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(data.length, 40);
  writeFileSync(filePath, Buffer.concat([header, data]));
}

writeWav(join(musicDir, "celebration.wav"));
writeFileSync(join(root, "public", ".nojekyll"), "");
console.log("assets written");
