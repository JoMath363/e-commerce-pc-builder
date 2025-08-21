import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '../config/database';

type CartItem = {
  id: string;
  name?: string;
  price?: number | Decimal;
  imageUrl?: string;
  quantity: number;
};

export default class ProfileService {
  static async findInfo(email: string) {
    return await prisma.user.findUnique({
      select: {
        email: true,
        name: true
      },
      where: { email }
    })
  }

  static async findCart(email: string) {
    const user = await prisma.user.findUnique({
      select: {
        cart: true,
      },
      where: { email }
    })

    if (!user) throw new Error("User not found.")

    return user.cart as CartItem[]
  }

  static async addToCart(email: string, id: string) {
    const user = await prisma.user.findUnique({
      select: {
        cart: true,
      },
      where: { email }
    })

    if (!user) throw new Error("User not found.")

    const cart: CartItem[] = (user.cart as CartItem[]) ?? []

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) return cart;

    const product = await prisma.product.findUnique({
      where: { id },
      select: {
        name: true,
        price: true,
        imageUrl: true
      }
    })

    if (!product) throw new Error("Product not found.")

    cart.push({ id, ...product, quantity: 1 });


    const updatedUser = await prisma.user.update({
      where: { email },
      data: { cart },
    });

    return updatedUser.cart as CartItem[];
  }

  static async updateCartItemQty(email: string, id: string, quantity: number) {
    const user = await prisma.user.findUnique({
      select: {
        cart: true,
      },
      where: { email }
    })

    if (!user) throw new Error("User not found.")

    const cart: CartItem[] = (user.cart as CartItem[]) ?? []

    const capQuantity = Math.min(Math.max(quantity, 1), 10) // min = 1; max = 10;
    
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        item.quantity = capQuantity;
      }

      return item;
    });

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { cart: updatedCart },
    });

    return updatedUser.cart as CartItem[];
  }

  static async removeFromCart(email: string, id: string) {
    const user = await prisma.user.findUnique({
      select: {
        cart: true,
      },
      where: { email }
    })

    if (!user) throw new Error("User not found.")

    const cart: CartItem[] = (user.cart as CartItem[]) ?? []

    const updatedCart = cart.filter(item => item.id !== id);

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { cart: updatedCart },
    });

    return updatedUser.cart as CartItem[];
  }
}