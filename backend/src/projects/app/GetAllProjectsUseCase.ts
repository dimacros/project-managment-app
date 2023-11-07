import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class GetAllProjectsUseCase {
  private readonly projectRepository: DatabaseService['project'];

  constructor (
    readonly database: DatabaseService
  ) {
    this.projectRepository = this.database['project'];
  }

  async handle() {
    const projects = await this.projectRepository.findMany();

    return projects;
  }
}