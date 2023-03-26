import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaBuscadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:IDatosBasicosModel) : Observable<IDatosBasicosModel> {
        return this.clienProxy.emit( 'usuario.persona.buscada',
            JSON.stringify({ data})
        )
    }
}