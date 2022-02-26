import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNamaste(): string {
    return 'Namaste sab!';
  }

  goHome(): string {
    return 'Go to Home!';
  }
}
