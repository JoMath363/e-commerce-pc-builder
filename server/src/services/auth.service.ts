import { prisma } from '../config/database';
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ENV } from '../config/enviroment';

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
      throw new Error("This email is already in use.");
    }

    const passwordHash = await hash(dto.password, 8);

    const data =  await prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        passwordHash: passwordHash
      }
    });

    return { data };
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
      throw new Error('User not in register.')
    }

    const passwordsMatch = await compare(dto.password, user.passwordHash)

    if (!passwordsMatch) {
      throw new Error('User ou password invalid.')
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