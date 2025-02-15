import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/electeur')
export class DashElecteurController {

    @Get()
    @Render('dashboardElecteur') 
    home(@Req() req: Request) {
        const currentPage = req.url.replace('/dashboard', '');

        return { 
            titre:"Suivi de parrainage",
            currentUrl: currentPage || "/home" }; 
    }
}
