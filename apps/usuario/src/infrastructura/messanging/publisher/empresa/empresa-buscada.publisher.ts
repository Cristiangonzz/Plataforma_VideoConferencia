import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegistrarEmpresaDto } from '../../../dto/registrar-empresa.dto';
import { Observable } from 'rxjs';

@Injectable()
export class EmpresaBuscadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    /**
     * It takes a JSON object, converts it to a string, and then sends it to the server.
     * @param {RegistrarEmpresaDto} data - The data to be sent to the server.
     * @returns The Observable is being returned.
     */
    publish(data:RegistrarEmpresaDto) : Observable<RegistrarEmpresaDto> {
        return this.clienProxy.emit( 'usuario.empresa.buscada',
            JSON.stringify({ data})
        )
    }
}