import { Controller, Get, Render } from '@nestjs/common';

@Controller('connexion')
export class ConnexionController {
    @Get()
    @Render('connexion') // Assurez-vous que le fichier "acceuil.ejs" existe dans "views"
    connexion() {}
}
