import { Test, TestingModule } from '@nestjs/testing';
import { ConnexionCandidatController } from './connexion-candidat.controller';

describe('ConnexionCandidatController', () => {
  let controller: ConnexionCandidatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConnexionCandidatController],
    }).compile();

    controller = module.get<ConnexionCandidatController>(ConnexionCandidatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
