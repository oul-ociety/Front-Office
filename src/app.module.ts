import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';
import { CandidatController } from './candidat/candidat.controller';
import { CandidatService } from './candidat/candidat.service';
import { CandidatModule } from './candidat/candidat.module';
import { ParrainageModule } from './parrainage/parrainage.module';

import { DashElecteurModule } from './dash-electeur/dash-electeur.module';
import { CandidatElecteurService } from './candidat-electeur/candidat-electeur.service';
import { CandidatElecteurModule } from './candidat-electeur/candidat-electeur.module';


@Module({
  imports: [DashboardModule, CandidatModule, ParrainageModule, DashElecteurModule, CandidatElecteurModule, ], 
  controllers: [AppController, DashboardController, CandidatController, ],
  providers: [AppService, CandidatService, CandidatElecteurService],
})
export class AppModule {}
