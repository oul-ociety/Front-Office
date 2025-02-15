import { Controller, Get, Render, Req } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard/home')
export class DashboardController {
  constructor(
    private readonly dashService: DashboardService,
  ) {}

  @Get()
  @Render('dashboardCandidat') 
  async home(@Req() req: Request) {
    const currentPage = req.url.replace('/dashboard', '');
    console.log('Current page:', currentPage);
    const data = await this.dashService.getData(); 

    return { 
      data, 
      titre: "Suivi de parrainage",
      currentUrl: currentPage || "/homecandidat",
    };
  }
}
