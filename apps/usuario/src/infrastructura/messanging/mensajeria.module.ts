import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PersonaRegistradaPublisher } from "./publisher/persona/persona-registrado.publisher";
@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'USUARIO_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'main_queue',
                queueOptions: {
                  durable: false
                },
              },
            },
          ]),
    ],
    controllers: [],
    providers: [PersonaRegistradaPublisher],
    exports: [PersonaRegistradaPublisher],
  })
  export class MensajeriaModule {}
  