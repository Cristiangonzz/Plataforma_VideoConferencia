import { Observable, catchError, mergeMap, of, throwIfEmpty } from "rxjs";
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';


export class BuscarVideoConferenciaUseCase {  
  
    constructor(private readonly videoConferenciaService: IVideoConferenciaDomainService<VideoConferenciaDomainEntity>) { }

        execute(dato: string): Observable<VideoConferenciaDomainEntity> {

            return of(dato).pipe(
                throwIfEmpty(() => new Error('Dato requerido')),
                mergeMap((datoValidado :string) => {
                    return this.videoConferenciaService.findOneBy(datoValidado);
                }),
                catchError((err : Error) => {
                    throw new Error('No se encontró la videoConferencia');
                })
            );
         
    }
}