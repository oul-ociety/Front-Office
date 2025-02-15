import { Test, TestingModule } from '@nestjs/testing';
import { DashElecteurController } from './dash-electeur.controller';

describe('DashElecteurController', () => {
  let controller: DashElecteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashElecteurController],
    }).compile();

    controller = module.get<DashElecteurController>(DashElecteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
