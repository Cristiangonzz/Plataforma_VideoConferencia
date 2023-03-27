import { NestFactory } from '@nestjs/core';
import { CuentaModule } from './cuenta.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  
  const app = await NestFactory.create(CuentaModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'usuario_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.startAllMicroservices();

  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()} - Cuenta`);
}
bootstrap();
