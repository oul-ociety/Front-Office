import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { CandidatController } from './candidat/candidat.controller';
import { CandidatModule } from './candidat/candidat.module';
import { ParrainageModule } from './parrainage/parrainage.module';
import { DashElecteurModule } from './dash-electeur/dash-electeur.module';
import { CandidatElecteurService } from './candidat-electeur/candidat-electeur.service';
import { CandidatElecteurModule } from './candidat-electeur/candidat-electeur.module';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionModule } from './connexion/connexion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electeur } from './entities/Electeur.entity';
import * as path from 'path';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConnexionCandidatController } from './connexion-candidat/connexion-candidat.controller';
import { ConnexionCandidatService } from './connexion-candidat/connexion-candidat.service';
import { ConnexionCandidatModule } from './connexion-candidat/connexion-candidat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'roundhouse.proxy.rlwy.net',
      port: 58775,
      username: 'root',
      password: 'FZHyGjvSHsTjOnQRHHpOXYJpzqWXSjDW',
      database: 'railway',
      entities: [path.join(__dirname, 'entities/**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    DashboardModule,
    CandidatModule, // Only one import of CandidatModule
    ParrainageModule,
    DashElecteurModule,
    CandidatElecteurModule,
    ConnexionModule,
    ConnexionCandidatModule,
  ], 
  controllers: [
    AppController, 
    DashboardController, 
    CandidatController, 
    ConnexionController, ConnexionCandidatController,
  ],
  providers: [
    AppService, 
    CandidatElecteurService, ConnexionCandidatService,
  ],
})
export class AppModule {}