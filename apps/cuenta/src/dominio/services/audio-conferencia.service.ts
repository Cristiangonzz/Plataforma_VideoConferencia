import { Observable } from 'rxjs';
import { AudioConferenciaDomainEntity } from '../model/entidades/audio-conferencia.dominio.entidad';


export interface IAudioConferenciaDomainService<T extends AudioConferenciaDomainEntity = AudioConferenciaDomainEntity> {

    crearAudioConferencia(dato: T ):Observable<T>;
    
    
}