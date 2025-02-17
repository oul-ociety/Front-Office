import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Candidat {
  @PrimaryGeneratedColumn() 
  id_candidat: number;

  @Column() 
  nom: string;

  @Column()
  prenom: string;

  @Column() 
  email: string;

  @Column()
  mot_de_passe: string;

  @Column() 
  date_inscription: Date;

  @Column() 
  statut_candidature: string;

  @Column() 
  nombre_parrainages: number;
}