 import { Inject, Injectable } from "@nestjs/common";
 import { ClientProxy } from "@nestjs/microservices";
 import { Observable, map, retry ,pipe } from "rxjs";

 @Injectable()
 export class AudioConferenciaCreadaPublisher {

     constructor(
         @Inject('CUENTA_SERVICE') private readonly clienProxy: ClientProxy,
     ) { }

     publish(data:string) : Observable<string> {
        return this.clienProxy
        .send('cuenta.audioConferencia.creada',data).pipe(
            map((res : string) =>   res )
            ,
             retry(2)
            );
     }
 }