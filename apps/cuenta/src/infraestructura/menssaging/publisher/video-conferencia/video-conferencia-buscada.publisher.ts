import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

import { IVideoConferencia } from '../../../../dominio/model/interfaces/video-conferencia.dominio.interfaces';


@Injectable()
export class VideoConferenciaBuscadaPublisher {

    constructor(
        @Inject('CUENTA_SERVICE') private readonly clienProxy: ClientProxy,
    ) { }

    publish(data:IVideoConferencia) : Observable<IVideoConferencia> {
        return this.clienProxy.emit( 'cuenta.videoConferencia.buscada',
            JSON.stringify({ data})
        )
    }
}