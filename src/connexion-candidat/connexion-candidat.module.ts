import { Module } from '@nestjs/common';
import { ConnexionCandidatController } from './connexion-candidat.controller';
import { ConnexionCandidatService } from './connexion-candidat.service';

@Module({
  controllers: [ConnexionCandidatController],
  providers: [ConnexionCandidatService],
})
export class ConnexionCandidatModule {}
