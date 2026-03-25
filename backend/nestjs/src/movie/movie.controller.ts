import { Controller, Get } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  findAll() {
    return [{ title: 'Fight club' }, { title: 'Matrix' }];
  }
}
