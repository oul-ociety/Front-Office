import { Module } from '@nestjs/common';
import { ConnexionService } from './connexion.service';

@Module({
  providers: [ConnexionService]
})
export class ConnexionModule {}
