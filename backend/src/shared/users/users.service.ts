import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  private readonly userRepository: DatabaseService['user'];

  constructor (
    readonly database: DatabaseService
  ) {
    this.userRepository = this.database['user'];
  }
  
  async findOne(username: string) {
    const user = await this.userRepository.findUnique({
      where: {
        email: username
      }
    });

    return user;
  }
}
