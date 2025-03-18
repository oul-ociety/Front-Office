import { Module } from '@nestjs/common';
import { ConnexionService } from './connexion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electeur } from 'src/entities/Electeur.entity';
import { DashElecteurModule } from 'src/dash-electeur/dash-electeur.module';
import { ConnexionController } from './connexion.controller';
import { electeurs } from 'src/entities/electeurs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Electeur, electeurs]),
    DashElecteurModule  
  ],
  providers: [ConnexionService],
  exports: [ConnexionService],     
  controllers: [ConnexionController],
})
export class ConnexionModule {}
