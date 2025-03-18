import { Module } from '@nestjs/common';
import { DashElecteurController } from './dash-electeur.controller';
import { DashElecteurService } from './dash-electeur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';
import { Parrainage } from 'src/entities/Parrainage.entity';
import { Electeur } from 'src/entities/Electeur.entity'; // Import the Electeur entity

@Module({
  imports: [TypeOrmModule.forFeature([Candidat, Parrainage, Electeur])], // Add Electeur here
  controllers: [DashElecteurController],
  providers: [DashElecteurService],
  exports: [DashElecteurService],
})
export class DashElecteurModule {}