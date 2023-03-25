import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PersonaRegistradaPublisher } from "./publisher/persona/persona-registrado.publisher";
import { PersonaBuscadaPublisher } from "./publisher/persona/persona-buscada.oublisher";
import { EmpresaBuscadaPublisher } from "./publisher/empresa/empresa-buscada.publisher";
import { EmpresaRegistradaPublisher } from "./publisher/empresa/empresa-registrada.publisher";
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
      PersonaRegistradaPublisher,
      PersonaBuscadaPublisher,

      EmpresaRegistradaPublisher,
      EmpresaBuscadaPublisher,
    ],
    exports: [
      EmpresaRegistradaPublisher,
      EmpresaBuscadaPublisher,
      
      PersonaRegistradaPublisher,
      PersonaBuscadaPublisher],
  })
  export class MensajeriaModule {}
  