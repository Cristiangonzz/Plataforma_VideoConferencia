import { Observable } from 'rxjs';
import { AudioConferenciaDomainEntity } from '../model/entidades/audio-conferencia.dominio.entidad';


export interface IAudioConferenciaDomainService<T extends AudioConferenciaDomainEntity = AudioConferenciaDomainEntity> {

    crearAudioConferencia(dato: T ):Observable<T>;
    // findOneBy(id: string): Observable<T>
    // ActualizarAudioConferencia(id: string , dato : T ):Observable<T>;
    // eliminarAudioConferencia(id: string): Observable<T>;
    // findAll(): Observable<T[]>;
    
}