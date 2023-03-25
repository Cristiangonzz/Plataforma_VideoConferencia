import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()} - Usuario`);
}
bootstrap();
