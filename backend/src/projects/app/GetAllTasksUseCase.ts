import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class GetAllTasksUseCase {
  private readonly taskRepository: DatabaseService['task'];

  constructor (
    readonly database: DatabaseService
  ) {
    this.taskRepository = this.database['task'];
  }

  async handle(params: { projectId: number }) {
    const tasks = await this.taskRepository.findMany({
      where: {
        projectId: params.projectId,
      }
    });

    return tasks;
  }
}