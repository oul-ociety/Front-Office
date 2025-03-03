import { Test, TestingModule } from '@nestjs/testing';
import { ConnexionCandidatService } from './connexion-candidat.service';

describe('ConnexionCandidatService', () => {
  let service: ConnexionCandidatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnexionCandidatService],
    }).compile();

    service = module.get<ConnexionCandidatService>(ConnexionCandidatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
