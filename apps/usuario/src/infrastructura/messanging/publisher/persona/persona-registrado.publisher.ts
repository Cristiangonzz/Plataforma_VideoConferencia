import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RegistrarPersonaDto } from '../../../dto/registrar-persona.dto';

@Injectable()
export class PersonaRegistradaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:RegistrarPersonaDto) : Observable<RegistrarPersonaDto> {
        return this.clienProxy.emit( 'usuario.persona.registrada',
            JSON.stringify({ data})
        )
    }
}