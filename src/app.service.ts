import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeriodeParrainage } from './entities/ParrainagePeriode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(PeriodeParrainage)
        private readonly PeriodeRepository: Repository<PeriodeParrainage>
    ){}async getparrainage (){
        const recup = await this.PeriodeRepository.find({where:{statutPeriode:"ouvert"}})
        console.log(recup)
        return recup
    }
}
