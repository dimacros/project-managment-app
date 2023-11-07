import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { SharedModule } from 'src/shared/shared.module';
import { CreateProjectUseCase } from './app/CreateProjectUseCase';
import { CreateTaskDto } from './infra/Task.dto';
import { GetAllProjectsUseCase } from './app/GetAllProjectsUseCase';
import { GetAllTasksUseCase } from './app/GetAllTasksUseCase';
import { UpdateTaskUseCase } from './app/UpdateTaskUseCase';

@Module({
  imports: [SharedModule],
  controllers: [ProjectsController],
  providers: [
    CreateProjectUseCase,
    CreateTaskDto,
    GetAllProjectsUseCase,
    GetAllTasksUseCase,
    UpdateTaskUseCase
  ]
})
export class ProjectsModule {}
