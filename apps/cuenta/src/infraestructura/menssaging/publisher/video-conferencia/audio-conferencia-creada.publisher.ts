 import { Inject, Injectable } from "@nestjs/common";
 import { ClientProxy } from "@nestjs/microservices";
 import { Observable } from "rxjs";

 import { IAudioConferencia } from '../../../../dominio/model/interfaces/audio-conferencia.dominio.interfaces';


 @Injectable()
 export class AudioConferenciaCreadaPublisher {

     constructor(
         @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
     ) { }

     publish(data:IAudioConferencia) : Observable<IAudioConferencia> {
         return this.clienProxy.emit( 'cuenta.audioConferencia.creada',
             JSON.stringify({ data})
         )
     }
 }