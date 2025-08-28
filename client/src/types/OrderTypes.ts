export type CartItem = {
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
  }
};

export type Address = {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
