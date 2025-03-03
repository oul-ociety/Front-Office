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

    // async getCandidat(idElecteur)
    // {
    //     return this.ElecteurRepository.find({where: { id_electeur : idElecteur}});
    // }
    

    async VerifInfo1(name,numElec,numBur,numCNId){
        const Electeur = await this.ElecteurRepository.find({where:{numEl:numElec,numCNI:numCNId,nom:name,numBu:numBur}})
        console.log(Electeur);
    }

}
