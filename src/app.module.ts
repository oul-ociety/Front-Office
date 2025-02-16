import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionModule } from './connexion/connexion.module';

@Module({
  imports: [DashboardModule, ConnexionModule], 
  controllers: [AppController, DashboardController, ConnexionController],
  providers: [AppService],
})
export class AppModule {}
