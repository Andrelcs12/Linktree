import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDTO: RegisterDTO ) {
    return await this.authService.register(registerDTO);
  }


  @Post('login')
  @HttpCode(201)
  async login(@Body() informacoesLogin: LoginDTO ) {
    return await this.authService.login(informacoesLogin);
  }


  @Get('usuarios')
  @HttpCode(201)
  async pegarUsuarios() {
    return await this.authService.pegarUsuarios();
  }

  @Get(':id')
  @HttpCode(201)
  async pegarUmUsuario(@Param('id') id: string) {
    return await this.authService.pegarUmUsuario(id);
  }

}
