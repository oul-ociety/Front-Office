import { Controller, Get, Post, Render, Req, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DashElecteurService } from './dash-electeur.service';

@Controller('dashboard/electeur')
export class DashElecteurController {
  constructor(private readonly candidatService: DashElecteurService) {}

  @Get()
  @Render('dashboardElecteur')
  async home(@Req() req: Request) {
    const currentPage =
      req.url.replace('/dashboard/electeur', '') || '/homecandidat';
    const candidats = await this.candidatService.getAllCandidats();

    return {
      titre: 'Parrainer',
      currentUrl: currentPage,
      candidats,
    };
  }

  @Post('send-code')
  async sendCode(@Body() body: any, @Res() res: Response) {
    const { email } = body;

    // Envoyer le code à l'e-mail de l'utilisateur
    const success = await this.candidatService.generateAndSendCode(email);

    if (success) {
      res.json({ success: true, message: 'Code envoyé avec succès !' });
    } else {
      res.json({ success: false, message: "Échec de l'envoi du code." });
    }
  }

  @Post('verify-code')
  async verifyCode(@Body() body: any, @Res() res: Response) {
    const { email, code } = body;

    // Vérifier le code saisi
    const isValid = await this.candidatService.verifyCode(email, code);

    if (isValid) {
      const idElecteur = 1
      const idCandidat = 1 
      res.json({ success: true, message: 'Code validé avec succès !' });
    } else {
      res.json({ success: false, message: 'Code incorrect.' });
    }
  }
}