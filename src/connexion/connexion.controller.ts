import { Controller, Post, Body } from '@nestjs/common';
import { ConnexionService } from './connexion.service';

@Controller('connexion')
export class ConnexionController {
  constructor(private readonly electeurService: ConnexionService) {}

  @Post('creer-compte')
  async creerCompte(
    @Body('numEl') numEl: string,
    @Body('numCNI') numCNI: string,
    @Body('nom') nom: string,
    @Body('numBu') numBu: number,
    @Body('email') email: string,
    @Body('numTel') numTel: string,
  ) {
    const electeur = await this.electeurService.verifierElecteur(numEl, numCNI, nom, numBu);
    if (!electeur) {
      return { message: 'Informations d\'électeur non valides.' };
    }

    const contactExiste = await this.electeurService.verifierContact(email, numTel);
    if (contactExiste) {
      return { message: 'Email ou numéro de téléphone déjà utilisé.' };
    }

    const nouveauElecteur = await this.electeurService.creerElecteur(email, numTel);
    // Envoyer le code d'authentification par email et SMS ici
    return { message: 'Code d\'authentification envoyé.', electeur: nouveauElecteur };
  }
}