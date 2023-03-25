import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PlataformaRegistradaPublisher {

    constructor(
        @Inject('CUENTA_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:any) : Observable<any> {
        return this.clienProxy.emit( 'cuenta.plataforma.registrada',
            JSON.stringify({ data})
        )
    }
}