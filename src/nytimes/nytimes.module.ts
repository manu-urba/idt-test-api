import { Module } from '@nestjs/common';
import { NyTimesService } from './nytimes.service';
import { NyTimesController } from './nytimes.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [NyTimesService],
  exports: [NyTimesService],
  controllers: [NyTimesController],
})
export class NyTimesModule {}
