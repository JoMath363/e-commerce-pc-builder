import { APIError } from '../middlewares/errorHandler';
import { prisma } from '../config/database';

export type Address = {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export default class AddressesService {
  static async getAddress(userId: string) {
    const data = await prisma.address.findUnique({ where: { userId } });

    return { data };
  }

  static async createAddress(userId: string, address: Address) {
    const data = await prisma.address.create({ data: { userId, ...address } });

    return { data };
  }

  static async updateAddress(userId: string, address: Address) {
    const data = await prisma.address.update({
      where: { userId },
      data: address
    });

    return { data };
  }
}