export type ProductPreview = {
  name: string;
  price: number | null;
  imageUrl?: string;
};

export type ProductData = {
  name: string;
  description: string;
  price: number | null;
  imageUrl?: string;
};

export type ProductFilter = {
  categories: number[];
  maxPrice: number;
  minPrice: number;
};
