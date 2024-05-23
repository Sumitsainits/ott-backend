import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  async get() {
    return 'hello there! your service is up and running.';
  }
}
