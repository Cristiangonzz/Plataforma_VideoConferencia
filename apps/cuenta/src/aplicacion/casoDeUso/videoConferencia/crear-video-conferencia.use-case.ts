import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { ValidationError, validate } from "class-validator";
import { IVideoConferencia } from '../../../dominio/model/interfaces/video-conferencia.dominio.interfaces';
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';


export class CrearVideoConferenciaUseCase {  
  
    constructor(private readonly videoConferenciaService: IVideoConferenciaDomainService<VideoConferenciaDomainEntity>) { }

        execute(dato: IVideoConferencia): Observable<VideoConferenciaDomainEntity> {

            const observable = from(validate(dato));

            return observable.pipe(
                mergeMap((errors : ValidationError[]) => {
                    if (errors.length > 0) {
                        throw new Error('Datos incorrectos');
                    }
    
                    const newVideoConferencia = new VideoConferenciaDomainEntity();

                    newVideoConferencia.anfitrion = dato.anfitrion;
                    newVideoConferencia.participante = [""];
                    newVideoConferencia.chatVivo = true;
                    newVideoConferencia.grabacion = false;
                    newVideoConferencia.pizzarra = false;
                    newVideoConferencia.compartirArchivo = false;
                    newVideoConferencia.presentacion = false;
                    
                    
                    return of(newVideoConferencia);
                }),
                mergeMap((VideoConferencia:VideoConferenciaDomainEntity) => {
                    return this.videoConferenciaService.crearVideoConferencia(VideoConferencia);
                }),
                catchError((error:Error) => {
                    throw new Error(error.message);
                }));
         
    }
}