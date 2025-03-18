import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parrainage } from 'src/entities/Parrainage.entity';
 // Importez l'entité Parrainage
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(Parrainage) // Injection du repository Parrainage
        private readonly parrainageRepository: Repository<Parrainage>,
    ) {}

    async getParrainage(candidatId: number) {
        return await this.parrainageRepository.createQueryBuilder('parrainage')
            .leftJoinAndSelect('parrainage.candidat', 'candidat') // Charger la relation Candidat
            .leftJoinAndSelect('parrainage.electeur', 'electeur') // Charger la relation Electeur
            .where('candidat.id_candidat = :candidatId', { candidatId }) // Filtrer par le candidat // Filtrer les parrainages validés
            .getMany();
    }
    
    
}