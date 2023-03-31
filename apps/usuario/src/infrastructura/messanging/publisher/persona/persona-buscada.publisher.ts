import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaBuscadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    /**
     * I'm going to emit a message to the server, and I'm going to send it a JSON object that contains
     * a data property, which is going to be the data that I'm sending to the server.
     * @param {IDatosBasicosModel} data - IDatosBasicosModel
     * @returns An Observable of type IDatosBasicosModel
     */
    publish(data:IDatosBasicosModel) : Observable<IDatosBasicosModel> {
        return this.clienProxy.emit( 'usuario.persona.buscada',
            JSON.stringify({ data})
        )
    }
}