import { Module } from '@nestjs/common';
import { CandidatElecteurController } from './candidat-electeur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';
import { CandidatElecteurService } from './candidat-electeur.service';
import { DashElecteurModule } from 'src/dash-electeur/dash-electeur.module'; // Importer DashElecteurModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidat]), // Importer l'entité Candidat
    DashElecteurModule, // Importer DashElecteurModule
  ],
  controllers: [CandidatElecteurController],
  providers: [CandidatElecteurService],
})
export class CandidatElecteurModule {}