 import { Inject, Injectable } from "@nestjs/common";
 import { ClientProxy } from "@nestjs/microservices";
 import { Observable, map, mergeMap, retry, tap } from "rxjs";

 //import { IVideoConferencia } from '../../../../dominio/model/interfaces/video-conferencia.dominio.interfaces';


 @Injectable()
 export class VideoConferenciaCreadaPublisher {

     constructor(
         @Inject('CUENTA_SERVICE') private readonly clienProxy: ClientProxy,
     ) { }

     publisher(data: string): Observable<string> {
        return this.clienProxy
            .send('cuenta.videoConferencia.creada',data).pipe(
                map((res : string) =>   res )
                ,
                retry(2)
                );
      }
}
 