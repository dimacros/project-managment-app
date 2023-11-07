import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/database/database.service';

@Injectable()
export class UsersService {
  constructor (
    private readonly userRepository: DatabaseService['user']
  ) {}
  
  async findOne(username: string) {
    const user = await this.userRepository.findUnique({
      where: {
        email: username
      }
    });

    return user;
  }
}
