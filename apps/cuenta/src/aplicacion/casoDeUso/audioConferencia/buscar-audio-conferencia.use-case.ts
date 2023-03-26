import { Observable, catchError, mergeMap, of, throwIfEmpty } from "rxjs";
import { AudioConferenciaDomainEntity } from "apps/cuenta/src/dominio/model/entidades/audio-conferencia.dominio.entidad";
import { IAudioConferenciaDomainService } from "apps/cuenta/src/dominio/services/audio-conferencia.service";


export class BuscarAudioConferenciaUseCase {  
  
    constructor(private readonly AudioConferenciaService: IAudioConferenciaDomainService<AudioConferenciaDomainEntity>) { }

        execute(dato: string): Observable<AudioConferenciaDomainEntity> {

            return of(dato).pipe(
                throwIfEmpty(() => new Error('Dato requerido')),
                mergeMap((datoValidado :string) => {
                    return this.AudioConferenciaService.findOneBy(datoValidado);
                }),
                catchError((err : Error) => {
                    throw new Error('No se encontró la audioConferencia');
                })
            );
         
    }
}