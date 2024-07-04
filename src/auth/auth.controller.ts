import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup() {
    return {
      message: 'You have signed up',
    };
  }
}
