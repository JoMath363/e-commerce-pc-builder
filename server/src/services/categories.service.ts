import { prisma } from '../config/database';

export default class CategoriesService {
  static async findAll() {
    const data = await prisma.category.findMany();

    return { data };
  }
  
  static async create(name: string) {
    const data = await prisma.category.create({ data: { name } });

    return { data };
  }

  static async update(id: string, name: string) {
    const data = await prisma.category.update({
      where: { id },
      data: { name },
    });

    return { data };
  }

  static async delete(id: string) {
    return await prisma.category.delete({ where: { id } });
  }
}