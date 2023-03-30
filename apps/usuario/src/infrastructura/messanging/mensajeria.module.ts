import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PersonaRegistradaPublisher } from "./publisher/persona/persona-registrado.publisher";
import { PersonaBuscadaPublisher } from "./publisher/persona/persona-buscada.publisher";
import { EmpresaBuscadaPublisher } from "./publisher/empresa/empresa-buscada.publisher";
import { EmpresaRegistradaPublisher } from "./publisher/empresa/empresa-registrada.publisher";
import { PersonaEditadaPublisher } from "./publisher/persona/persona-editada.publisher";
import { PersonaEliminadaPublisher } from "./publisher/persona/persona-eliminada.publisher";

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'USUARIO_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'usuario_queue',
                queueOptions: {
                  durable: false
                },
              },
            },
          ]),
    ],
    controllers: [],
    providers: [
      //Usuario
      PersonaRegistradaPublisher,
      PersonaBuscadaPublisher,
      PersonaEditadaPublisher,
      PersonaEliminadaPublisher,

      EmpresaRegistradaPublisher,
      EmpresaBuscadaPublisher,

      //cuenta
      // PersonaBuscadaVideoConferenciaPublisher,
      // RespuestaVideoConferenciadaRegistradaPublisher,
    ],
    exports: [
      //cuenta 
      // PersonaBuscadaVideoConferenciaPublisher,
      // RespuestaVideoConferenciadaRegistradaPublisher,

      //usuario
      EmpresaRegistradaPublisher,
      EmpresaBuscadaPublisher,
      
      PersonaRegistradaPublisher,
      PersonaBuscadaPublisher,
      PersonaEditadaPublisher,
      PersonaEliminadaPublisher,
    ],
  })
  export class MensajeriaModule {}
  