import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidat } from 'src/entities/candidat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(Candidat)
        private readonly dashboardRepository: Repository<Candidat>, // 🔹 Injection correcte
      ) {}
      async getData() {
        const data = await this.dashboardRepository.find(); 
        console.log('Mes candidats',data);
        
        return data;
      }
      
}
