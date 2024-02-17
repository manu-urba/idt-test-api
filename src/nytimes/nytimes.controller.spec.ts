import { Test, TestingModule } from '@nestjs/testing';
import { NytimesController } from './nytimes.controller';

describe('NytimesController', () => {
  let controller: NytimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NytimesController],
    }).compile();

    controller = module.get<NytimesController>(NytimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
