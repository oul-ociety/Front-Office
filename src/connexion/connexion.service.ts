import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Electeur } from 'src/entities/Electeur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConnexionService {
    constructor(
        @InjectRepository(Electeur)
        private readonly ElecteurRepository: Repository<Electeur>
    ){}
    async getCandidat(idElecteur)
    {
        return this.ElecteurRepository.find({where: { id_electeur : idElecteur}});
    }
}
