import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateGoogleUser(googleUser: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    if (user) return user;

    return this.prisma.user.create({
      data: googleUser,
    });
  }

  async login(userId: string) {
    const token = this.jwtService.sign(
      {
        sub: userId,
      },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '3h',
      },
    );

    return { id: userId, token };
  }

  // generatejwt(user: any) {
  //   return this.jwtService.sign({
  //     sub: user.id,
  //     email: user.email,
  //   });
  // }
}
