import { OrderItem } from '@prisma/client';
import { prisma } from '../config/database';

type OrderItemInput = {
  productId: string;
  quantity: number;
};

type OrderPreviewItem = {
  productId: string;
  name: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
};

type OrderPreview = {
  total: number;
  items: OrderPreviewItem[];
};

export default class OrdersService {
  static async findAll() {
    return await prisma.order.findMany();
  }

  static async findById(id: string) {
    return await prisma.order.findUnique({ where: { id } });
  }

  static async preview(data: OrderItemInput[]): Promise<OrderPreview> {
    const productIds = data.map((item) => item.productId);

    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        price: true,
      },
    });

    if (products.length !== productIds.length) {
      throw new Error('One or more products not found.');
    }

    const items: OrderPreviewItem[] = data.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        throw new Error(`Product not found.`);
      }
      return {
        productId: item.productId,
        name: product.name,
        imageUrl: product.imageUrl,
        quantity: +item.quantity,
        unitPrice: +product.price,
      };
    });

    const total = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

    return { total, items };
  }

  static async create(data: { userEmail: string; items: OrderItemInput[] }) {
    const { total, items } = await this.preview(data.items);

    return await prisma.order.create({
      data: {
        userEmail: data.userEmail,
        total,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
          })),
        },
      },
      include: {
        items: true,
      },
    });
  }
}