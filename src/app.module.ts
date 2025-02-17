import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionModule } from './connexion/connexion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Electeur } from './entities/Electeur.entity';
import * as path from 'path';

@Module({
  imports: [DashboardModule, ConnexionModule], 
  controllers: [AppController, DashboardController, ConnexionController],
  providers: [AppService],
})


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'roundhouse.proxy.rlwy.net',
            port: 58775,
            username: 'root',
            password: 'FZHyGjvSHsTjOnQRHHpOXYJpzqWXSjDW',
            database: 'railway',
            entities: [path.join(__dirname, 'entities/**/**.entity{.ts,.js}')],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})



export class AppModule {}