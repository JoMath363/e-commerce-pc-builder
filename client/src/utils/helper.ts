export function unslug(s: string): string {
  return s.split(/[-_]/).filter(x => x != "-")
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}