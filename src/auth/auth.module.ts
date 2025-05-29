import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';
import googleAuthConfig from './config/google-auth.config';

@Module({
  imports: [PrismaModule, ConfigModule.forFeature(googleAuthConfig)],
  controllers: [AuthController],
  providers: [AuthService, JwtService, GoogleStrategy],
})
export class AuthModule {}
