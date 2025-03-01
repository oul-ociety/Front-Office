import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';


@Entity('Candidat')
export class Candidat {
    @PrimaryGeneratedColumn()
    id_candidat: number;

    @Column()
    nombre_parrainages: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column({ type: 'timestamp' })
    date_inscription: Date;

    @Column({ nullable: true })
    numEl: number;

    @Column({ nullable: true })
    nomPartie: string;

    @Column({ type: 'text', nullable: true })
    slogan: string;

    @Column({ nullable: true })
    URL: string;

    @Column({ type: 'date', nullable: true })
    ddn: Date;

    @Column({ nullable: true })
    codeAuth: string;

    @Column({ name: '3couleurs', nullable: true })
    troisCouleurs: string;

    @Column({ nullable: true })
    photo: string;

    @Column({
        type: 'enum',
        enum: ['validé', 'en_attente', 'rejeté'],
    })
    statut_candidature: 'validé' | 'en_attente' | 'rejeté';

    @OneToMany(() => Parrainage, parrainage => parrainage.candidat)
    parrainages: Parrainage[];
}