import { Controller, Get, Render } from '@nestjs/common';
import { ConnexionCandidatService } from './connexion-candidat.service';

@Controller('connexionCandidat')
export class ConnexionCandidatController {
    constructor(
        private readonly connexionCandidatService: ConnexionCandidatService,
        ) {}
    @Get()
    @Render('connexionCandidat')
    async connexionCandidat() {}
}


