export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\//, "");
  return `${base}${clean}`;
}
