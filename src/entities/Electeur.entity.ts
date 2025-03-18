import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';

@Entity('Electeur')
export class Electeur {
    @PrimaryGeneratedColumn()
    id_electeur: number;

    @Column({ type: 'datetime' })
    date_inscription: Date;

    @Column()
    codeAuth: number;

    @Column({ length: 20, nullable: true })
    numTel: string;

    @Column({ type: 'tinyint' })
    statut_parrainage: boolean;

    // Relation avec la table Parrainage (OneToMany)
    @OneToMany(() => Parrainage, (parrainage) => parrainage.electeur, {
        cascade: true, // Permet d'insérer, mettre à jour ou supprimer les parrainages associés à l'électeur
    })
    parrainages: Parrainage[];
}