import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}
  public validateAPIKey(apiKey: string): boolean {
    const allowedApiKeys = this.configService
      .get<string>('ALLOWED_API_KEYS')
      .split(',');
    return allowedApiKeys.includes(apiKey);
  }
}
