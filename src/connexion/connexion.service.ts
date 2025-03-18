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
    

    async VerifInfo1(name: string, numElec: string, numBur: string, numCNId: string) {
        try {
            const query = `
                SELECT * FROM Electeur
                WHERE nom = ? AND numEl = ? AND numBu = ? AND numCNI = ?
            `;
            const electeur3 = await this.ElecteurRepository.query(query, [name.trim(), numElec.trim(), numBur.trim(), numCNId.trim()]);
            console.log('Electeur found:', electeur3);
            return electeur3;
        } catch (error) {
            console.error('Erreur lors de la vérification des informations :', error);
            throw new Error('Une erreur est survenue lors de la vérification des informations.');
        }
    }

}
