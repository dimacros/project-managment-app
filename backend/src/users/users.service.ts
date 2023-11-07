import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne(username: string) {
    return { username: 'john' };
  }
}
