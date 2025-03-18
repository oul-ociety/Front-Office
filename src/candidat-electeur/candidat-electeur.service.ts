import { Injectable } from '@nestjs/common';
import { DashElecteurService } from 'src/dash-electeur/dash-electeur.service';

@Injectable()
export class CandidatElecteurService {
  constructor(
    private readonly DashService: DashElecteurService, // Injecter DashElecteurService
  ) {}

  async getAllCandidats() {
    const candidats = await this.DashService.getAllCandidats(); // Utiliser await
    return candidats;
  }
}