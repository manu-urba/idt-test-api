import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  constructor(private readonly health: HealthCheckService) {}

  @Get()
  @Version(VERSION_NEUTRAL)
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }
}
