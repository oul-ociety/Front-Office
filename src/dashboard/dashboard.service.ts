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

    async getParrainage() {
        // Récupérer les parrainages validés
        const data = await this.parrainageRepository.find({
            where: { statut_parrainage: 'validé' },
            relations: ['candidat', 'electeur'], // Charger les relations avec Candidat et Electeur
        });

        console.log('Mes Parrainages validés :', data);
        return data;
    }
}