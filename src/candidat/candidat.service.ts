import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidat } from '../entities/candidat.entity'; 
@Injectable()
export class CandidatService {
    constructor(
        @InjectRepository(Candidat)
        private readonly candidatRepository: Repository<Candidat>,
    ) {}

    async getAllCandidats(): Promise<Candidat[]> {
        return this.candidatRepository.find({where: {statut_candidature:"validé"}});
    }
}
