import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
   console.log("URL DO BANCO:", process.env.DATABASE_URL);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
