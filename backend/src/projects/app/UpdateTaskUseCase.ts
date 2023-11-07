import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class UpdateTaskUseCase {
  private readonly taskRepository: DatabaseService['task'];

  constructor (
    readonly database: DatabaseService
  ) {
    this.taskRepository = this.database['task'];
  }

  async handle(
    params: { projectId: number, taskId: number },
    body: { name?: string, description?: string, completed?: boolean }
  ) {
    const task = await this.taskRepository.findUnique({
      where: {
        id: params.taskId,
      }
    })

    if (! task) {
      throw new NotFoundException('Task not found');
    }

    if (task.projectId !== params.projectId) {
      throw new ForbiddenException('Task does not belong to this project');
    }

    const updatedTask = await this.taskRepository.update({
      data: body,
      where: {
        id: params.taskId,
      }
    });

    return updatedTask;
  }
}