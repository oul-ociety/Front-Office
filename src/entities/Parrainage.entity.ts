import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Electeur } from './Electeur.entity';
import { Candidat } from './candidat.entity';


@Entity('Parrainage')
export class Parrainage {
    @PrimaryGeneratedColumn()
    id_parrainage: number;

    @ManyToOne(() => Candidat, candidat => candidat.parrainages)
    @JoinColumn({ name: 'id_candidat' })
    candidat: Candidat;

    @ManyToOne(() => Electeur, electeur => electeur.parrainages)
    @JoinColumn({ name: 'id_electeur' })
    electeur: Electeur;

    @Column({ type: 'datetime' })
    date_parrainage: Date;

    @Column({
        type: 'enum',
        enum: ['validé', 'en_attente', 'refusé'],
        default: 'en_attente',
    })
    statut_parrainage: 'validé' | 'en_attente' | 'refusé';
}
