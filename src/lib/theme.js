export function applyTheme(site) {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("theme");
  const ids = site.themes.map((theme) => theme.id);
  const theme = ids.includes(requested) ? requested : site.defaultTheme;
  document.documentElement.dataset.theme = theme;
  return theme;
}
