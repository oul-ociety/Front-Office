import { Test, TestingModule } from '@nestjs/testing';
import { ParrainageController } from './parrainage.controller';

describe('ParrainageController', () => {
  let controller: ParrainageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParrainageController],
    }).compile();

    controller = module.get<ParrainageController>(ParrainageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
