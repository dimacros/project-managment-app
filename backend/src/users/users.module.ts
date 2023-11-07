import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [UsersService]
})
export class UsersModule {}
