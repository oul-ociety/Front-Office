import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Décorateur pour indiquer que c'est une entité
export class Candidat {
  @PrimaryGeneratedColumn() // Colonne clé primaire auto-incrémentée
  id_candidat: number;

  @Column() // Colonne pour le nom
  nom: string;

  @Column() // Colonne pour le prénom
  prenom: string;

  @Column() // Colonne pour l'email
  email: string;

  @Column() // Colonne pour le mot de passe
  mot_de_passe: string;

  @Column() // Colonne pour la date d'inscription
  date_inscription: Date;

  @Column() // Colonne pour le statut de la candidature
  statut_candidature: string;

  @Column() // Colonne pour le nombre de parrainages
  nombre_parrainages: number;
}