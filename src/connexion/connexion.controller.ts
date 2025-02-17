import { Controller, Get, Render } from '@nestjs/common';
import { ConnexionService } from './connexion.service';

@Controller('connexion')
export class ConnexionController {
    constructor(
        private readonly ConnexionService : ConnexionService,
    ){}
    @Get()
    @Render('connexion') // Assurez-vous que le fichier "acceuil.ejs" existe dans "views"
    async connexion() {
        const idElecteur=1;
        const data=await this.ConnexionService.getCandidat(idElecteur);
    }
}
