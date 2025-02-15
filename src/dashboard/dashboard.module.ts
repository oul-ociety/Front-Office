import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidat])],
  providers: [DashboardService], 
  controllers: [DashboardController],
  exports: [DashboardService], 
})
export class DashboardModule {}
