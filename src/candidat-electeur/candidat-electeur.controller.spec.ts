import { Test, TestingModule } from '@nestjs/testing';
import { CandidatElecteurController } from './candidat-electeur.controller';

describe('CandidatElecteurController', () => {
  let controller: CandidatElecteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatElecteurController],
    }).compile();

    controller = module.get<CandidatElecteurController>(CandidatElecteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
