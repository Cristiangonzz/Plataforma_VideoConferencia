import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { ValidationError, validate } from "class-validator";
import { AudioConferenciaDomainEntity } from "../../../../src/dominio/model/entidades/audio-conferencia.dominio.entidad";
import { IAudioConferencia } from "../../../../src/dominio/model/interfaces/audio-conferencia.dominio.interfaces";
import { IAudioConferenciaDomainService } from "../../../../src/dominio/services/audio-conferencia.service";


export class CrearAudioConferenciaUseCase {  
    
    constructor(private readonly AudioConferenciaService: IAudioConferenciaDomainService<AudioConferenciaDomainEntity>) { }

        execute(dato: IAudioConferencia): Observable<AudioConferenciaDomainEntity> {
           
            const newAudioConferencia = new AudioConferenciaDomainEntity();

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
