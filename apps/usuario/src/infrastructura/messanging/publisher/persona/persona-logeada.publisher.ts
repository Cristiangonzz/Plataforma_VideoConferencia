import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {  LogearseDto } from '../../../dto/logarse.dto';

@Injectable()
export class PersonaLogeadaPublisher {

    constructor(
        @Inject('USUARIO_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:LogearseDto) : Observable<LogearseDto> {
        return this.clienProxy.emit( 'usuario.persona-logeada',
            JSON.stringify({ data})
        )
    }
}