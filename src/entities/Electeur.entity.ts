import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';


@Entity('electeur')
export class Electeur {
    @PrimaryGeneratedColumn()
    id_electeur: number;

    @Column({ length: 50 })
    nom: string;

    @Column({ length: 50 })
    prenom: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ type: 'datetime' })
    date_inscription: Date;

    @Column({ type: 'tinyint' })
    statut_validation: boolean;

    @Column({ type: 'date', nullable: true })
    ddn: Date;

    @Column({ length: 255, nullable: true })
    numBu: string;

    @Column()
    codeAuth: number;

    @Column({ length: 20, nullable: true })
    numTel: string;

    @Column({ length: 255, nullable: true })
    numEl: string;

    @Column({ length: 255, nullable: true })
    numCNI: string;

    @Column({ type: 'tinyint' })
    statut_parrainage: boolean;

    @OneToMany(() => Parrainage, (parrainage) => parrainage.electeur, {
        cascade: true,
    })
    parrainages: Parrainage[];
}