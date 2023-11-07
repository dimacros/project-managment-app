import { Module } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [DatabaseService, UsersService],
  exports: [DatabaseService, UsersService],
})
export class SharedModule {}
