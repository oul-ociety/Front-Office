import { Controller, Get, Render, Req } from '@nestjs/common';
import { CandidatElecteurService } from './candidat-electeur.service';

@Controller('dashboard/electeur/suivi')
export class CandidatElecteurController {
    constructor(private readonly candidatElecService: CandidatElecteurService) {}
    @Get()
    @Render('dashboardElecteur') 
    async getManage(@Req() req: Request) {
        console.log("electeur completeeeeee");
        const Candidat = await this.candidatElecService.getAllCandidats();
        console.log(Candidat)
        
        return { 
            titre:"Candidats en lisse",
            currentUrl: "/suivicandidat",
            Candidat
            };
    }
}
