import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
 import { AudioConferenciaActualizadaPublisher } from "./publisher/video-conferencia/audio-conferencia-actualizada.publisher";
 import { VideoConferenciaCreadaPublisher } from "./publisher/video-conferencia/video-conferencia-creada.publisher";
 import { VideoConferenciaBuscadaPublisher } from "./publisher/video-conferencia/video-conferencia-buscada.publisher";
 import { VideoConferenciaActualizadaPublisher } from "./publisher/video-conferencia/video-conferencia-actualizada.publisher";
 import { AudioConferenciaBuscadaPublisher } from "./publisher/video-conferencia/audio-conferencia-buscada.publisher";
 import { AudioConferenciaCreadaPublisher } from "./publisher/video-conferencia/audio-conferencia-creada.publisher";
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

       VideoConferenciaCreadaPublisher ,
       VideoConferenciaBuscadaPublisher,
       VideoConferenciaActualizadaPublisher,

       AudioConferenciaActualizadaPublisher ,
       AudioConferenciaBuscadaPublisher ,
       AudioConferenciaCreadaPublisher,
      
    ],
    exports: [
       VideoConferenciaCreadaPublisher ,
       VideoConferenciaBuscadaPublisher,
       VideoConferenciaActualizadaPublisher,
      
       AudioConferenciaActualizadaPublisher ,
       AudioConferenciaBuscadaPublisher ,
       AudioConferenciaCreadaPublisher,
    ],
  })
  export class MensajeriaModuleCuenta {}
  