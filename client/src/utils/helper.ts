import type { ProductFilter } from "../types/ProdcutTypes";

export function unslug(s: string): string {
  return s.split(/[-_]/).filter(x => x != "-")
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}

export function getFilterQuery(filter: ProductFilter) {
  const query = []

  if (filter.categories.length > 0) {
    query.push(`category=${filter.categories.join(",")}`)
  }

  query.push(`minPrice=${filter.minPrice}`)
  query.push(`maxPrice=${filter.maxPrice}`)

  return query.join("&");
}