import { prisma } from '../config/database';

type User = {
  name: string;
  email: string;
  password: string;
}

export default class ProfileService {
  static async findInfo(email: string) {
    return await prisma.user.findUnique({
      select: {
        email: true,
        name: true,
        cart: true,
        orders: true,
        builds: true
      },
      where: { email }
    })
  }
}