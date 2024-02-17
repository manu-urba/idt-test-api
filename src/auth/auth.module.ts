import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { ApikeyStrategy } from './strategy/apikey.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AuthService, ApikeyStrategy],
})
export class AuthModule {}
