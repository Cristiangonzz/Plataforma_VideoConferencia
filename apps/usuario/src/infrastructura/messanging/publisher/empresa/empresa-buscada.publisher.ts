import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';
import { RegistrarEmpresaDto } from '../../../dto/registrar-empresa.dto';
import { Observable } from 'rxjs';

@Injectable()
export class EmpresaBuscadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:RegistrarEmpresaDto) : Observable<RegistrarEmpresaDto> {
        return this.clienProxy.emit( 'usuario.empresa.buscada',
            JSON.stringify({ data})
        )
    }
}