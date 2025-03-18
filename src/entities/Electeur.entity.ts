import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';


@Entity('electeur')
export class Electeur {
    @PrimaryGeneratedColumn()
    id_electeur: number;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ type: 'datetime' })
    date_inscription: Date;

  @Column()
  codeAuth: number;

    @Column({ length: 20, nullable: true })
    numTel: string;

    @Column({ type: 'tinyint' })
    statut_parrainage: boolean;

    @OneToMany(() => Parrainage, parrainage => parrainage.electeur)
    parrainages: Parrainage[];
}