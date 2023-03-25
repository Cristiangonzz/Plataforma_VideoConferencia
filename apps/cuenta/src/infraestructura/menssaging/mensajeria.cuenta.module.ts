import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
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
    providers: [
      // PersonaRegistradaPublisher,
      // PersonaBuscadaPublisher,

      // EmpresaRegistradaPublisher,
      // EmpresaBuscadaPublisher,
    ],
    exports: [
      // EmpresaRegistradaPublisher,
      // EmpresaBuscadaPublisher,
      
      // PersonaRegistradaPublisher,
      // PersonaBuscadaPublisher
    ],
  })
  export class MensajeriaModuleCuenta {}
  