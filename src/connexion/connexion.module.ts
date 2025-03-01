import { Module } from '@nestjs/common';
import { ConnexionService } from './connexion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electeur } from 'src/entities/Electeur.entity';
import { DashElecteurModule } from 'src/dash-electeur/dash-electeur.module';
import { ConnexionController } from './connexion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Electeur]),  // <-- Nécessaire si non géré dans ElecteurModule
    DashElecteurModule  // <-- Ajout du module qui contient ElecteurRepository
  ],
  providers: [ConnexionService],   // Fournir le service
  exports: [ConnexionService],     // Exporter pour d'autres modules
  controllers: [ConnexionController],
})
export class ConnexionModule {}
