import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Electeur {
    @PrimaryGeneratedColumn()
    id_electeur: number;

    @Column({ length: 50 })
    nom: string;

    @Column({ length: 50 })
    prenom: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column()
    date_inscription: Date;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    statut_validation: number;

    @Column({ type: 'date', nullable: true })
    ddn: Date;

    @Column({ length: 255, nullable: true })
    numBu: string;

    @Column()
    codeAuth: number;

    @Column({ length: 20, nullable: true })
    numTel: string;

    @Column({ length: 255, nullable: true })
    numEL: string;

    @Column({ length: 255, nullable: true })
    numCNI: string;

    @Column({ type: 'tinyint', width: 1, default: 0 })
    statut_parrainage: number;
}