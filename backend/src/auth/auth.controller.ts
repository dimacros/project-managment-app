import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return {
      accessToken: await this.jwtService.signAsync({
        sub: req.user.id,
        email: req.user.email,
        role: req.user.role,
      }),
    }
  }
}
