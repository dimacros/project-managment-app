import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { RoleAdminGuard } from 'src/auth/rbac/admin.guard';
import { CreateProjectDto } from './infra/Project.dto';
import { CreateTaskDto, UpdateTaskDto } from './infra/Task.dto';
import { CreateProjectUseCase } from './app/CreateProjectUseCase';
import { GetAllProjectsUseCase } from './app/GetAllProjectsUseCase';
import { CreateTaskUseCase } from './app/CreateTaskUseCase';
import { GetAllTasksUseCase } from './app/GetAllTasksUseCase';
import { UpdateTaskUseCase } from './app/UpdateTaskUseCase';

@UseGuards(JwtAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(
    readonly CreateProjectUseCase: CreateProjectUseCase,
    readonly GetAllProjectsUseCase: GetAllProjectsUseCase,
    readonly CreateTaskUseCase: CreateTaskUseCase,
    readonly GetAllTasksUseCase: GetAllTasksUseCase,
    readonly UpdateTaskUseCase: UpdateTaskUseCase,
  ) {}

  @Get()
  getProjects() {
    return this.GetAllProjectsUseCase.handle();
  }

  @UseGuards(RoleAdminGuard)
  @Post()
  newProject(@Body() body: CreateProjectDto) {
    return this.CreateProjectUseCase.handle(body);
  }

  @Get(':id/tasks')
  getTasks(@Param('id', ParseIntPipe) id: number) {
    return this.GetAllTasksUseCase.handle({
      projectId: id,
    });
  }

  @UseGuards(RoleAdminGuard)
  @Post(':id/tasks')
  newTask(@Body() body: CreateTaskDto) {
    return this.CreateTaskUseCase.handle(body);
  }

  @Patch(':id/tasks/:taskId')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Param('taskId', ParseIntPipe) taskId: number,
    @Body() body: UpdateTaskDto,
  ) {
    return this.UpdateTaskUseCase.handle({
      projectId: id,
      taskId,
    }, body);
  }
}
