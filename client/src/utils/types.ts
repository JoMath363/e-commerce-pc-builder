export type ProductPreview = {
  name: string;
  price: number | null;
  imageUrl?: string;
};

export type ProductFilter = {
  categories: string[];
  maxPrice: number;
  minPrice: number;
};
