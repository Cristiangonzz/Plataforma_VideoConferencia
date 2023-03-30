import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { ValidationError, validate } from "class-validator";
import { AudioConferenciaDomainEntity } from "../../../../src/dominio/model/entidades/audio-conferencia.dominio.entidad";
import { IAudioConferencia } from "../../../../src/dominio/model/interfaces/audio-conferencia.dominio.interfaces";
import { IAudioConferenciaDomainService } from "../../../../src/dominio/services/audio-conferencia.service";
import { AudioConferenciaMongoService } from '../../../infraestructura/dataBase/services/audio-conferencia.service.mongo';
import { AudioConferenciaSchema } from '../../../infraestructura/dataBase/schema/audio-conferencia.schema';


export class CrearAudioConferenciaUseCase {  
    
    constructor(private readonly AudioConferenciaService: AudioConferenciaMongoService) { }

        execute(dato: IAudioConferencia): Observable<AudioConferenciaSchema> {
           
            const newAudioConferencia = new AudioConferenciaSchema();

                newAudioConferencia.anfitrion = dato.anfitrion;
                newAudioConferencia.participantes = [""];
                newAudioConferencia.audio = true;
                
            return this.AudioConferenciaService.crearAudioConferencia(newAudioConferencia);
            
    }
}


//const observable = from(validate(dato));

// return observable.pipe(
//     mergeMap((errors : ValidationError[]) => {
//         if (errors.length > 0) {
//             throw new Error('Datos incorrectos');
//         }
        
//         const newAudioConferencia = new AudioConferenciaDomainEntity();

//         newAudioConferencia.anfitrion = dato.anfitrion;
        
//         newAudioConferencia.participantes = [""];
//         newAudioConferencia.audio = true;
        
//         return of(newAudioConferencia);
//     }),
//     mergeMap((AudioConferencia:AudioConferenciaDomainEntity) => {
//         return this.AudioConferenciaService.crearAudioConferencia(AudioConferencia);
//     }),
//     catchError((error:Error) => {
//         throw new Error(error.message);
//     }));
