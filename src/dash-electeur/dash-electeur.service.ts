import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';
import { Electeur } from 'src/entities/Electeur.entity';
import { Parrainage } from 'src/entities/Parrainage.entity';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import * as process from 'process';

@Injectable()
export class DashElecteurService {
  private codeStorage: { [email: string]: string } = {}; // Stockage temporaire des codes

  constructor(
    @InjectRepository(Candidat)
    private readonly candidatRepository: Repository<Candidat>,

    @InjectRepository(Electeur)
    private readonly electeurRepository: Repository<Electeur>,

    @InjectRepository(Parrainage)
    private readonly parrainageRepository: Repository<Parrainage>,
  ) {}

  private transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER || '699c9e61f8aaf2',
      pass: process.env.MAILTRAP_PASS || '1270192be4ef55',
    },
  });

  async getAllCandidats(): Promise<Candidat[]> {
    return this.candidatRepository.find({
      where: { statut_candidature: 'validé' },
    });
  }

  async generateAndSendCode(email: string): Promise<boolean> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    this.codeStorage[email] = code;

    const mailOptions = {
      from: '"JollofNet" <no-reply@jollofnet.com>',
      to: email,
      subject: 'Votre Code de Validation',
      text: `Votre code OTP est : ${code}`,
      html: `<p>Votre code de validation est : <strong>${code}</strong></p>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email envoyé :', info.messageId);
      return true;
    } catch (error) {
      console.error('Erreur envoi mail:', error);
      return false;
    }
  }

  async verifyCode(email: string, code: string): Promise<boolean> {
    return this.codeStorage[email] === code;
  }

  async createParrainage(idElecteur: number, idCandidat: number): Promise<boolean> {
    try {
      const electeur = await this.electeurRepository.findOne({ where: { id_electeur: idElecteur } });
      const candidat = await this.candidatRepository.findOne({ where: { id_candidat: idCandidat } });

      if (!electeur || !candidat) {
        console.error('Electeur ou candidat non trouvé.');
        return false;
      }

      const parrainage = this.parrainageRepository.create({
        electeur,
        candidat,
        date_parrainage: new Date(),
        statut_parrainage: 'validé',
      });

      await this.parrainageRepository.save(parrainage);
      console.log('Parrainage enregistré avec succès.');
      return true;
    } catch (error) {
      console.error('Erreur lors de la création du parrainage :', error);
      return false;
    }
  }
}