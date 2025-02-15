import { Module } from '@nestjs/common';
import { CandidatElecteurController } from './candidat-electeur.controller';

@Module({
  controllers: [CandidatElecteurController]
})
export class CandidatElecteurModule {}
