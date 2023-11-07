import { Module } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class SharedModule {}
