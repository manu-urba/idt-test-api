import { Test, TestingModule } from '@nestjs/testing';
import { NyTimesService } from './nytimes.service';

describe('NytimesService', () => {
  let service: NyTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NyTimesService],
    }).compile();

    service = module.get<NyTimesService>(NyTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
