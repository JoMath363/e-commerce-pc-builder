import { prisma } from '../config/database';
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ENV } from '../config/enviroment';
import { APIError } from '../middlewares/errorHandler';

type RegisterDTO = {
  name: string;
  email: string;
  password: string;
}

type LoginDTO = {
  email: string;
  password: string;
}

export default class AuthService {
  static async register(dto: RegisterDTO) {
    const existent = await prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (existent) {
      throw new APIError("This email is already in use.", 409);
    }

    const passwordHash = await hash(dto.password, 8);

    await prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        passwordHash: passwordHash
      }
    });
  }

  static async login(dto: LoginDTO) {
    const user = await prisma.user.findUnique({
      select: {
        email: true,
        passwordHash: true
      },
      where: {
        email: dto.email.trim()
      }
    })

    if (!user) {
      throw new APIError('User not found in register.', 404);
    }

    const passwordsMatch = await compare(dto.password, user.passwordHash)

    if (!passwordsMatch) {
      throw new APIError('Password is incorrect.', 401);
    }

    const accessToken = sign({
      email: user.email
    }, ENV.JWT_SECRET, {
      expiresIn: "1d"
    })

    return { accessToken }
  }

  static async logged(email: string) {
    const data = await prisma.user.findUnique({
      select: {
        email: true,
        name: true
      },
      where: { email }
    })

    return { data };
  }
}