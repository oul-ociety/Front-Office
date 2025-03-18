import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Electeur } from '../entities/Electeur.entity';
import { electeurs } from '../entities/electeurs.entity';

@Injectable()
export class ElecteurService {
  constructor(
    @InjectRepository(electeurs)
    private electeursRepository: Repository<electeurs>,
    @InjectRepository(Electeur)
    private electeurRepository: Repository<Electeur>,
  ) {}

  async verifierElecteur(numEl: number, numCNI: number, nom: string, numBu: number): Promise<electeurs | null> {
    return this.electeursRepository.findOne({
      where: { numero_electeur: numEl, cin: numCNI, nom, bureau_vote: numBu },
    });
  }

  async verifierContact(email: string, numTel: string): Promise<boolean> {
    const existingElecteur = await this.electeurRepository.findOne({
      where: [{ email }, { numTel }],
    });
    return !!existingElecteur;
  }

  async creerElecteur(email: string, numTel: string): Promise<Electeur> {
    const codeAuth = Math.floor(1000 + Math.random() * 9000);
    const electeur = this.electeurRepository.create({ email, numTel, codeAuth, date_inscription: new Date(), statut_parrainage: 0 });
    return this.electeurRepository.save(electeur);
  }
}