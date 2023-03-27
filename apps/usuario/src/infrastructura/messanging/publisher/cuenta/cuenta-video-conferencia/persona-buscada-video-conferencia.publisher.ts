import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaBuscadaVideoConferenciaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:string) : Observable<any> {
        return this.clienProxy.emit( 'usuario.persona.buscada.videoConferencia',
            JSON.stringify({ data})
        )
    }
}