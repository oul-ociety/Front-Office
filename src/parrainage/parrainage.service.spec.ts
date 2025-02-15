import { Test, TestingModule } from '@nestjs/testing';
import { ParrainageService } from './parrainage.service';

describe('ParrainageService', () => {
  let service: ParrainageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParrainageService],
    }).compile();

    service = module.get<ParrainageService>(ParrainageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
