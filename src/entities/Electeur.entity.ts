import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';


@Entity()
export class Electeur {
  @PrimaryGeneratedColumn()
  id_electeur: number;

  @Column({ type: 'datetime' })
  date_inscription: Date;

  @Column()
  codeAuth: number;

  @Column({ length: 20, nullable: true })
  numTel: string;

  @Column({ length: 200, nullable: true })
  email: string;

  @Column()
  statut_parrainage: number;
}