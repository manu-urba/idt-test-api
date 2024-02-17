import { Test, TestingModule } from '@nestjs/testing';
import { NyTimesController } from './nytimes.controller';
import { NyTimesModule } from './nytimes.module';

describe('NyTimesController', () => {
  let controller: NyTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NyTimesModule],
      controllers: [NyTimesController],
    }).compile();

    controller = module.get<NyTimesController>(NyTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
