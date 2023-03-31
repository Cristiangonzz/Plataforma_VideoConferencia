import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegistrarEmpresaDto } from '../../../dto/registrar-empresa.dto';
import { Observable } from 'rxjs';

@Injectable()
export class EmpresaRegistradaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    /**
     * It takes a RegistrarEmpresaDto object, converts it to a string, and emits it to the server.
     * @param {RegistrarEmpresaDto} data - The data to be sent to the server.
     * @returns The Observable is being returned.
     */
    publish(data:RegistrarEmpresaDto) : Observable<RegistrarEmpresaDto> {
        return this.clienProxy.emit( 'usuario.empresa.registrada',
            JSON.stringify({ data})
        )
    }
}