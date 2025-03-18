import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class electeurs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, unique: true })
  cin: string;

  @Column({ length: 20, unique: true })
  numero_electeur: string;

  @Column({ length: 100 })
  nom: string;

  @Column({ length: 100 })
  prenom: string;

  @Column({ type: 'date' })
  date_naissance: Date;

  @Column({ length: 100 })
  lieu_naissance: string;

  @Column({ type: 'enum', enum: ['M', 'F'] })
  sexe: string;

  @Column({ type: 'enum', enum: ['pending', 'validated'], default: 'pending' })
  statut: string;

  @Column({ nullable: true })
  bureau_vote: number;
}