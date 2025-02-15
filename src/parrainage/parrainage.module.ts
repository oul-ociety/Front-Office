import { Module } from '@nestjs/common';
import { ParrainageController } from './parrainage.controller';
import { ParrainageService } from './parrainage.service';

@Module({
  controllers: [ParrainageController],
  providers: [ParrainageService]
})
export class ParrainageModule {}
