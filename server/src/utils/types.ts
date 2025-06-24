export type Product = {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  specs: Record<string, any>;
  categoryId: string;
};