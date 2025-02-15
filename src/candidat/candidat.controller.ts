import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/candidat')
export class CandidatController {
    @Get()
    @Render('dashboardCandidat') 
    async getManage(@Req() req: Request) {
        console.log("candidat complete");
        return { 
            titre:"Candidats en lisse",
            currentUrl: "/candidat" };
    }
}

