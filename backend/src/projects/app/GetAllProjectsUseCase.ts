import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/shared/database/database.service";

@Injectable()
export class GetAllProjectsUseCase {
  constructor (
    private readonly projectRepository: DatabaseService['project']
  ) {}

  async handle() {
    const projects = await this.projectRepository.findMany();

    return projects;
  }
}