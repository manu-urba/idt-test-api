import { Test, TestingModule } from '@nestjs/testing';
import { NyTimesService } from './nytimes.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('NytimesService', () => {
  let service: NyTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [NyTimesService],
    }).compile();

    service = module.get<NyTimesService>(NyTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
