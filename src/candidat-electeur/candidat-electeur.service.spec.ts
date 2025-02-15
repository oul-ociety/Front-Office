import { Test, TestingModule } from '@nestjs/testing';
import { CandidatElecteurService } from './candidat-electeur.service';

describe('CandidatElecteurService', () => {
  let service: CandidatElecteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidatElecteurService],
    }).compile();

    service = module.get<CandidatElecteurService>(CandidatElecteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
