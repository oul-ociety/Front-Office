import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index') // Assurez-vous que le fichier "acceuil.ejs" existe dans "views"
  home() {
    return { message: 'Bienvenue sur JollofNet !' }; // 👈 Passer des données à EJS
  }
}
