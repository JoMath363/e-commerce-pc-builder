import { prisma } from '../config/database';

export default class CartsService {
  static async getCart(userId: string) {
    const data = await prisma.cartItem.findMany({
      where: { userId },
      select: {
        quantity: true,
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
          },
        },
      },
    });

    return { data };
  }

  static async createCartItem(userId: string, productId: string) {
    const cartItem = await prisma.cartItem.findFirst({
      where: { userId, productId }
    })

    if (cartItem) throw new Error("Item already in cart.")

    await prisma.cartItem.create({
      data: {
        userId,
        productId,
      },
    });

    return this.getCart(userId);
  }

  static async setCartItemQty(userId: string, productId: string, quantity: number) {
    if (quantity < 1 || quantity > 10) throw new Error("Quantity must be between 1 and 10.")

    const cartItem = await prisma.cartItem.findFirst({
      where: { userId, productId }
    })

    if (!cartItem) throw new Error("Item not in cart.")

    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: {
        quantity: quantity
      }
    });

    return this.getCart(userId);
  }

  static async deleteCartItem(userId: string, productId: string) {
    const cartItem = await prisma.cartItem.findFirst({
      where: { userId, productId }
    })

    if (!cartItem) throw new Error("Item not in cart.")

    await prisma.cartItem.delete({
      where: { id: cartItem.id }
    });

    return this.getCart(userId);
  }


}