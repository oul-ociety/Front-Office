import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('PeriodeParrainage')
export class PeriodeParrainage {
  @PrimaryGeneratedColumn({ name: 'id_periode' })
  idPeriode: number;

  @Column({ type: 'datetime', name: 'date_debut' })
  dateDebut: Date;

  @Column({ type: 'datetime', name: 'date_fin' })
  dateFin: Date;

  @Column({
    type: 'enum',
    enum: ['ouvert', 'fermé'],
    default: 'fermé',
    name: 'statut_periode',
    nullable: true,
  })
  statutPeriode: 'ouvert' | 'fermé';
}