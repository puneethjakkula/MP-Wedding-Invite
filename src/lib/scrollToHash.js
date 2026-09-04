export function scrollToHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "auto", block: "start" });
}
