import { Module } from '@nestjs/common';
import { NyTimesService } from './nytimes.service';
import { NytimesController } from './nytimes.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [NyTimesService],
  controllers: [NytimesController],
})
export class NytimesModule {}
