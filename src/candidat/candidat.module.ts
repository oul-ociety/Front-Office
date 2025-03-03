import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CandidatService } from './candidat.service';
import { CandidatController } from './candidat.controller';
import { Candidat } from 'src/entities/candidat.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Candidat])], // ✅ Import du Repository
    controllers: [CandidatController],
    providers: [CandidatService],
    exports: [CandidatService], 
})
export class CandidatModule {}
