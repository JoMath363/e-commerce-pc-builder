import { prisma } from '../config/database';
import { Prisma } from '@prisma/client';

type Product = {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  specs: Record<string, any>;
  categoryId: string;
};

export default class ProductsService {
  static async find(query: any) {
    if (!query.page || Number.isNaN(query.page)) {
      throw new Error("Page query parameter missing.")
    }

    if (!query.limit || Number.isNaN(query.limit)) {
      throw new Error("Limit query parameter missing.")
    }

    const page = +query.page;
    const limit = +query.limit;
    const filter: Prisma.ProductWhereInput = {};

    if (query.name) {
      filter.name = { contains: query.name, mode: 'insensitive' };
    }

    if (query.category) {
      const categoryList = query.category.split(',');

      filter.category = {
        name: {
          in: categoryList,
          mode: 'insensitive',
        },
      };
    }

    if (query.minPrice || query.maxPrice) {
      filter.price = {};
      if (query.minPrice) {
        filter.price.gte = +query.minPrice;
      }
      if (query.maxPrice) {
        filter.price.lte = +query.maxPrice;
      }
    }

    return await prisma.product.findMany({
      where: filter,
      take: limit,
      skip: limit * (page - 1)
    });
  }

  static async findById(id: string) {
    return await prisma.product.findUnique({ where: { id } });
  }

  static async create(data: Product) {
    return await prisma.product.create({ data });
  }

  static async update(id: string, data: Partial<Product>) {
    return await prisma.product.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return await prisma.product.delete({ where: { id } });
  }
}