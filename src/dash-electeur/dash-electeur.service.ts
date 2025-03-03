import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import * as process from 'process';

@Injectable()
export class DashElecteurService {
  private codeStorage: { [email: string]: string } = {}; // Stockage temporaire des codes

  constructor(
    @InjectRepository(Candidat)
    private readonly candidatRepository: Repository<Candidat>,
  ) {}

  private transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io', // Utilisation de Mailtrap
    port: 2525, // Port recommandé par Mailtrap
    auth: {
      user: process.env.MAILTRAP_USER || "699c9e61f8aaf2", // Identifiant Mailtrap
      pass: process.env.MAILTRAP_PASS || "1270192be4ef55", // Mot de passe Mailtrap
    },
  });

  async getAllCandidats(): Promise<Candidat[]> {
    return this.candidatRepository.find({
      where: { statut_candidature: 'validé' },
    });
  }

  async generateAndSendCode(email: string): Promise<boolean> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    this.codeStorage[email] = code; // Stocker le code pour cet e-mail

    const mailOptions = {
      from: '"JollofNet" <no-reply@jollofnet.com>', // Adresse fictive
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
}
