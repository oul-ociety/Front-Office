import { Controller, Get, Render } from '@nestjs/common';
import { CandidatService } from './candidat.service';

@Controller('dashboard/candidat')
export class CandidatController {
    constructor(private readonly candidatService: CandidatService) {}

    @Get()
    @Render('dashboardCandidat')
    async getManage() {
        const candidats = await this.candidatService.getAllCandidats();
        console.log("Cand",candidats);
        
        return { 
            titre: "Candidats en lisse",
            currentUrl: "/candidat",
            candidats
        };
    }
}
