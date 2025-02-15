import { Module } from '@nestjs/common';
import { DashElecteurController } from './dash-electeur.controller';
import { DashElecteurService } from './dash-electeur.service';

@Module({
  controllers: [DashElecteurController],
  providers: [DashElecteurService]
})
export class DashElecteurModule {}
