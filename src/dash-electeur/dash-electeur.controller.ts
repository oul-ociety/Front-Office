import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('dashboard/electeur')
export class DashElecteurController {

    @Get()
    @Render('dashboardElecteur') 
    home(@Req() req: Request) {
        const currentPage = req.url.replace('/dashboard/electeur', '') || '/homecandidat';

        console.log("Parrainer");

        return { 
            titre: "Parrainer",
            currentUrl: currentPage 
        };
    }
}
