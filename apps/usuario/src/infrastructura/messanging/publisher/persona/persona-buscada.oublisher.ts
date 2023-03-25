import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';
import { BuscarMail } from '../../../dto/buscar-mail..dto';

@Injectable()
export class PersonaBuscadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:BuscarMail) : Observable<BuscarMail> {
        return this.clienProxy.emit( 'usuario.persona.Buscada',
            JSON.stringify({ data})
        )
    }
}