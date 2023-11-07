import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor(config: ConfigService) {
    super({
      datasourceUrl: config.getOrThrow('DATABASE_URL'),
      log: ['error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
