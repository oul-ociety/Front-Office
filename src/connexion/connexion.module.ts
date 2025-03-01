import { Module } from '@nestjs/common';
import { ConnexionService } from './connexion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electeur } from 'src/entities/Electeur.entity';
import { DashElecteurModule } from 'src/dash-electeur/dash-electeur.module';
import { ConnexionController } from './connexion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Electeur]),
    DashElecteurModule  
  ],
  providers: [ConnexionService],
  exports: [ConnexionService],     
  controllers: [ConnexionController],
})
export class ConnexionModule {}
