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

  @Column({ length: 20, nullable: true })
  numTel: string;

  @Column({ length: 255, nullable: true })
  numEL: string;

  @Column({ length: 255, nullable: true })
  numCNI: string;

  @Column() 
  date_inscription: Date;

  @Column() 
  statut_candidature: string;

  @Column() 
  nombre_parrainages: number;

  @Column({length: 255, nullable: true})
  nomPartie : string;

  @Column({length: 255, nullable: true})
  slogan : string;

  @Column({length: 255, nullable: true})
  codeAuth : string;

  @Column({length: 255, nullable: true})
  photo : string;
}