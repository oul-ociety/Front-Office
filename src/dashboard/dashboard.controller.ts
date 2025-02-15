import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/home')
export class DashboardController {
    @Get()
    @Render('dashboardCandidat') 
    home(@Req() req: Request) {
        const currentPage = req.url.replace('/dashboard', '');
        console.log("Current page:", currentPage);
        return { 
            titre:"Suivi de parrainage",
            currentUrl: currentPage || "/homecandidat" }; 
    }
}

