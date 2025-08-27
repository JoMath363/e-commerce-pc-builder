import { prisma } from '../config/database';
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ENV } from '../config/enviroment';

type User = {
  name: string;
  email: string;
  password: string;
}

export default class UsersService {
  static async findAll() {
    const data = await prisma.user.findMany();

    return { data };
  }

  static async findByEmail(email: string) {
    const data = await prisma.user.findUnique({ where: { email } });

    return { data };
  }

  static async update(user: Partial<User>) {
    const data = await prisma.user.update({
      where: {
        email: user.email
      },
      data: { ...user },
    });

    return { data };
  }

  static async delete(email: string) {
    return await prisma.user.delete({ where: { email } });
  }
}