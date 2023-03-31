import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaEditadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    /**
     * The function publish() takes an object of type IDatosBasicosModel as a parameter and returns an
     * Observable of type IDatosBasicosModel.
     * @param {IDatosBasicosModel} data - IDatosBasicosModel
     * @returns An observable.
     */
    publish(data:IDatosBasicosModel) : Observable<IDatosBasicosModel> {
        return this.clienProxy.emit( 'usuario.persona.editada',
            JSON.stringify({ data})
        )
    }
}