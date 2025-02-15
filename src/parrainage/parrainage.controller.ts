import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/parrainage')
export class ParrainageController {

    @Get()
    @Render('dashboard') // Affiche candidat.ejs au lieu de dashboard.ejs
    async getManage(@Req() req: Request) {
        console.log("candidat complete");
        return { currentUrl: "/parrainage" };
    }   
}
