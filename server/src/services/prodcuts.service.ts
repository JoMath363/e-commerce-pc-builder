import { Product } from 'src/utils/types';
import { prisma } from '../config/database';
import { Prisma } from '@prisma/client';

export default class ProductsService {
  static async find(query: any) {
    const filter: Prisma.ProductWhereInput = {};

    if (query.name) {
      filter.name = { contains: query.name, mode: 'insensitive' };
    }

    if (query.category) {
      filter.category = {
        name: {
          equals: query.category,
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
      where: filter
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