import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <-- Faltou este import
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LinksModule } from './modules/links/links.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- Faltou esta linha
    LinksModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}