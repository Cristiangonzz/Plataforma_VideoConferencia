import { NestFactory } from '@nestjs/core';
import { CuentaModule } from './cuenta.module';

async function bootstrap() {
  const app = await NestFactory.create(CuentaModule);
  await app.listen(3001);
}
bootstrap();
