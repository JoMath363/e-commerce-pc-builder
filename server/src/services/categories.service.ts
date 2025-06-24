import { prisma } from '../config/database';

export default class CategoriesService {
  static async findAll() {
    return await prisma.category.findMany();
  }

  static async findById(id: string) {
    return await prisma.category.findUnique({ where: { id } });
  }

  static async create(data: { name: string, slug: string }) {
    return await prisma.category.create({ data });
  }

  static async update(id: string, data: { name: string }) {
    return await prisma.category.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return await prisma.category.delete({ where: { id } });
  }
}