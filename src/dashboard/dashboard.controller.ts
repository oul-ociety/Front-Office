import { Controller, Get, Render } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {

    @Get()
    @Render('dashboard') // Assurez-vous que le fichier "acceuil.ejs" existe dans "views"
    home() {}
}
