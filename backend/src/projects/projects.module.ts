import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { CreateProjectUseCase } from './app/CreateProjectUseCase';
import { GetAllProjectsUseCase } from './app/GetAllProjectsUseCase';
import { GetAllTasksUseCase } from './app/GetAllTasksUseCase';
import { UpdateTaskUseCase } from './app/UpdateTaskUseCase';
import { CreateTaskUseCase } from './app/CreateTaskUseCase';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ProjectsController],
  providers: [
    CreateProjectUseCase,
    CreateTaskUseCase,
    GetAllProjectsUseCase,
    GetAllTasksUseCase,
    UpdateTaskUseCase
  ]
})
export class ProjectsModule {}
