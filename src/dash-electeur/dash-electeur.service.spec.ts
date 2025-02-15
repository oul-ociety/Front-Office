import { Test, TestingModule } from '@nestjs/testing';
import { DashElecteurService } from './dash-electeur.service';

describe('DashElecteurService', () => {
  let service: DashElecteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashElecteurService],
    }).compile();

    service = module.get<DashElecteurService>(DashElecteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
