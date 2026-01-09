import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // http://localhost:3000/task/all
  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  // http://localhost:3000/task/by-id/1
  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(Number(id));
  }
}
