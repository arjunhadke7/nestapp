import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/namaste')
  getNamaste(): string {
    return this.appService.getNamaste();
  }

  @Post()
  goHome(): string {
    return this.appService.goHome();
  }
}
