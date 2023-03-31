import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './usuario.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cuenta_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Usuarios API')
    .setDescription('Relaciona los Usuarios con las videoconferencias y audiosConferencia')
    .setVersion('1.0')
    .addTag('Usuarios')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.startAllMicroservices();
  
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()} - Usuario`);
}
bootstrap();
