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

type ProfuctFilter = {
  page: number;
  pageSize: number;
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

export default class ProductsService {
  static async find({ page, pageSize, name, category, minPrice, maxPrice }: ProfuctFilter) {
    const filter: Prisma.ProductWhereInput = {};

    if (name) {
      filter.name = { contains: name, mode: 'insensitive' };
    }

    if (category) {
      filter.category = {
        name: { in: category.split(','), mode: 'insensitive' },
      };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {
        gte: minPrice,
        lte: maxPrice,
      };
    }

    const data = await prisma.product.findMany({
      where: filter,
      take: pageSize,
      skip: pageSize * (page - 1)
    });

    const totalCount = await prisma.product.count({
      where: filter
    })

    const totalPages = Math.ceil(totalCount / pageSize);

    return { data, totalCount, totalPages }
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