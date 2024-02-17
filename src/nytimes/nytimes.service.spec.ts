import { Test, TestingModule } from '@nestjs/testing';
import { NyTimesService } from './nytimes.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('NyTimesService', () => {
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

  it('should call the nytimes API and return 200', async () => {
    const response = await service.getBestSellersList('');
    expect(response.status).toBe('OK');
  });
});
