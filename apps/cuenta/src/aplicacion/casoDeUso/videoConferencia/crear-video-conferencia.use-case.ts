import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { ValidationError, validate } from "class-validator";
import { IVideoConferencia } from '../../../dominio/model/interfaces/video-conferencia.dominio.interfaces';
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';
import { VideoConferenciaMongoService } from '../../../infraestructura/dataBase/services/video-conferencia.service.mongo';
import { VideoConferenciaSchema } from '../../../infraestructura/dataBase/schema/video-conferencia.schema';


export class CrearVideoConferenciaUseCase {  
  
    constructor(private readonly videoConferenciaService: VideoConferenciaMongoService) { }

        execute(dato: IVideoConferencia): Observable<VideoConferenciaSchema> {


            const newVideoConferencia = new VideoConferenciaSchema();

                newVideoConferencia.anfitrion = dato.anfitrion;
                   
                newVideoConferencia.participante = [""];
                newVideoConferencia.chatVivo = true;
                newVideoConferencia.grabacion = false;
                newVideoConferencia.pizzarra = false;
                newVideoConferencia.compartirArchivo = false;
                newVideoConferencia.presentacion = false;

                return this.videoConferenciaService.crearVideoConferencia(newVideoConferencia);

         
         
    }
}

   // const observable = from(validate(dato));

            // return observable.pipe(
            //     mergeMap((errors : ValidationError[]) => {
            //         if (errors.length > 0) {
            //             throw new Error('Datos incorrectos');
            //         }
    
            //         const newVideoConferencia = new VideoConferenciaDomainEntity();

            //         newVideoConferencia.anfitrion = dato.anfitrion;
                    
            //         newVideoConferencia.participante = [""];
            //         newVideoConferencia.chatVivo = true;
            //         newVideoConferencia.grabacion = false;
            //         newVideoConferencia.pizzarra = false;
            //         newVideoConferencia.compartirArchivo = false;
            //         newVideoConferencia.presentacion = false;
                    
                    
            //         return of(newVideoConferencia);
            //     }),
            //     mergeMap((VideoConferencia:VideoConferenciaDomainEntity) => {
            //         return this.videoConferenciaService.crearVideoConferencia(VideoConferencia);
            //     })
            //     ,
            //     catchError((error:Error) => {
            //         throw new Error(error.message);
            //     })
            //     );