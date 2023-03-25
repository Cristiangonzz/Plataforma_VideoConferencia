import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';

@Injectable()
export class PersonaRegistradaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:IDatosBasicosModel)/* : Observable<IDatosBasicosModel>*/ {
        return this.clienProxy.emit( 'usuario.persona.registrada',
            JSON.stringify({ data})
        )
    }
}