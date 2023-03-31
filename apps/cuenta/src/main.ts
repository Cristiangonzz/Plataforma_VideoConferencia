import { NestFactory } from '@nestjs/core';
import { CuentaModule } from './cuenta.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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


  const config = new DocumentBuilder()
    .setTitle('VideoConferencias API')
    .setDescription('Relaciona lus usuarios con las videoconferencias y audiosConferencia')
    .setVersion('1.0')
    .addTag('videoCionferencia')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()} - Cuenta`);
}
bootstrap();
