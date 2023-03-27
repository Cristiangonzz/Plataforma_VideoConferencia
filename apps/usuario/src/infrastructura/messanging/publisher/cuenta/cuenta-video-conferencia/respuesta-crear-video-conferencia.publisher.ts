import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RespuestaVideoConferenciadaRegistradaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:any) : Observable<any> {
        return this.clienProxy.emit( 'cuenta.respuesta.videoConferencia.registrada',
            JSON.stringify({ data})
        )
    }
}