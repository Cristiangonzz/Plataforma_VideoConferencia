import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { VideoConferenciaCreadaPublisher } from "./publisher/video-conferencia/video-conferencia-creada.publisher";
import { AudioConferenciaCreadaPublisher } from "./publisher/video-conferencia/audio-conferencia-creada.publisher";
@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'CUENTA_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'cuenta_queue',
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
       AudioConferenciaCreadaPublisher,
      
    ],
    exports: [
       VideoConferenciaCreadaPublisher ,
       AudioConferenciaCreadaPublisher,
    ],
  })
  export class MensajeriaModuleCuenta {}
  