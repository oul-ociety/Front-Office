import { Controller, Get, Post, Render, Req, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DashElecteurService } from './dash-electeur.service';

@Controller('dashboard/electeur')
export class DashElecteurController {
  constructor(private readonly candidatService: DashElecteurService) {}

  @Get()
  @Render('dashboardElecteur')
  async home(@Req() req: Request) {
    const currentPage = req.url.replace('/dashboard/electeur', '') || '/homecandidat';
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

    const success = await this.candidatService.generateAndSendCode(email);

    if (success) {
      res.json({ success: true, message: 'Code envoyé avec succès !' });
    } else {
      res.json({ success: false, message: "Échec de l'envoi du code." });
    }
  }

  @Post('verify-code')
  async verifyCode(@Body() body: any, @Res() res: Response) {
    const { email, code, idElecteur, idCandidat } = body;

    const isValid = await this.candidatService.verifyCode(email, code);

    if (isValid) {
      const parrainageSuccess = await this.candidatService.createParrainage(idElecteur, idCandidat);

      if (parrainageSuccess) {
        res.json({ success: true, message: 'Code validé et parrainage enregistré !' });
      } else {
        res.json({ success: false, message: 'Code validé, mais échec lors de ' });
      }
    } else {
      res.json({ success: false, message: 'Code incorrect.' });
    }
  }
}