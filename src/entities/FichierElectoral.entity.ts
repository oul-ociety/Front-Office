import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parrainage } from './Parrainage.entity';

@Entity('FichierElectoral')
    export class FichierElectoral {

    @PrimaryGeneratedColumn()
    id_Fichier: number;

    @Column()
    nom_Ficher: string;

    @Column({type : 'datetime'})
    date_importation : Date;

    @Column({
        type : 'enum', 
        enum:['valide', 'en_attente', 'refuse']})
    statut_validation : 'valide' | 'en_attente' | 'refuse';
    

    @Column()
    id_admin : number;
    
    }
