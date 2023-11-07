import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "../infra/Project.dto";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class CreateProjectUseCase {
  private readonly projectRepository: DatabaseService['project'];

  constructor (
    readonly database: DatabaseService
  ) {
    this.projectRepository = this.database['project'];
  }

  async handle(dto: CreateProjectDto) {
    const project = await this.projectRepository.create({
      data: {
        name: dto.name,
        description: dto.description,
      }
    });

    return project;
  }
}