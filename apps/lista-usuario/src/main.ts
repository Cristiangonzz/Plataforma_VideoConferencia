import { NestFactory } from '@nestjs/core';
import { ListaUsuarioModule } from './lista-usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(ListaUsuarioModule);
  await app.listen(3000);
}
bootstrap();
