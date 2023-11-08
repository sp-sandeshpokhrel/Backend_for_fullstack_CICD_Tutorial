import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sampledata')
  getSampleData() {
    return this.appService.getAllSampleData();
  }

  @Get('sampledata/:data')
  saveSampleData(data: string) {
    return this.appService.saveSampleData(data);
  }
}
