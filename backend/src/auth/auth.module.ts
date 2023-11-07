import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { jwtConstants } from './jwt/constants';
import { LocalStrategy } from './local/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
    PassportModule,
    SharedModule,
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy]
})
export class AuthModule {}
