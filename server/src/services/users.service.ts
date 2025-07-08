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
    return await prisma.user.findMany();
  }

  static async findByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  static async update(data: Partial<User>) {
    return await prisma.user.update({
      where: {
        email: data.email
      },
      data,
    });
  }

  static async delete(email: string) {
    return await prisma.user.delete({ where: { email } });
  }
}