import { Controller, Get, Render, Req } from '@nestjs/common';

@Controller('dashboard/parrainage')
export class ParrainageController {

    @Get()
    @Render('dashboard') 
    async getManage(@Req() req: Request) {
        console.log("candidat complete");
        return { currentUrl: "/parrainage" };
    }   
}
