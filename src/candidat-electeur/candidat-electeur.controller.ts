import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/electeur/suivi')
export class CandidatElecteurController {
    @Get()
    @Render('dashboardElecteur') 
    async getManage(@Req() req: Request) {
        console.log("electeur completeeeeee");
        return { 
            titre:"Candidats en lisse",
            currentUrl: "/suiviCandidat" };
    }
}
