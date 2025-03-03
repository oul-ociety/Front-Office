import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ConnexionService } from './connexion.service';

@Controller('connexion')
export class ConnexionController {
    // public form1:any;
    constructor(
        private readonly ConnexionService : ConnexionService,
    ){}
    @Get()

    @Render('connexionElecteur') // Assurez-vous que le fichier "acceuil.ejs" existe dans "views"

    async connexion() {}

    @Post('CreationCompteElecteur')
    async getElecteur(@Body() form){
        // this.form1=form;
        // console.log(this.form1);
        const nom = form.nom;
        const numEl = form.numEl;
        const numBu = form.numBu;
        const numCNI = form.numCNI;
        const test1 = await this.ConnexionService.VerifInfo1(nom,numEl,numBu,numCNI);
    }






}
