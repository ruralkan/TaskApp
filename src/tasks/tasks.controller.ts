import { Controller, Get } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { get } from 'http';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getAllTasks() {
        return this.taskService.getAllTask();
    }
}
