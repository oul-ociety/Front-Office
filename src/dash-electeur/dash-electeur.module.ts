import { Module } from '@nestjs/common';
import { DashElecteurController } from './dash-electeur.controller';
import { DashElecteurService } from './dash-electeur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidat])],
  controllers: [DashElecteurController],
  providers: [DashElecteurService],
  exports:[DashElecteurService]
})
export class DashElecteurModule {}
