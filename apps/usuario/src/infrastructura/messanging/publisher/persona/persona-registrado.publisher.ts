import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RegistrarPersonaDto } from '../../../dto/registrar-persona.dto';

@Injectable()
export class PersonaRegistradaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    /**
     * It takes a RegistrarPersonaDto object, converts it to a string, and publishes it to the server.
     * @param {RegistrarPersonaDto} data - The data to be sent to the server.
     * @returns The Observable is being returned.
     */
    publish(data:RegistrarPersonaDto) : Observable<RegistrarPersonaDto> {
        return this.clienProxy.emit( 'usuario.persona.registrada',
            JSON.stringify({ data})
        )
    }
}