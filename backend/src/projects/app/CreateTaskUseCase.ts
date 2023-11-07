import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "../infra/Task.dto";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class CreateTaskUseCase {
  constructor (
    private readonly taskRepository: DatabaseService['task']
  ) {}

  async handle(dto: CreateTaskDto) {
    const task = await this.taskRepository.create({
      data: {
        description: dto.description,
        projectId: dto.projectId,
        title: dto.title,
      }
    });

    return task;
  }
}