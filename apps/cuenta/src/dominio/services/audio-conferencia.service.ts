import { Observable } from 'rxjs';
import { AudioConferenciaDomainEntity } from '../model/entidades/audio-conferencia.dominio.entidad';


export interface IAudioConferenciaDomainService<T extends AudioConferenciaDomainEntity = AudioConferenciaDomainEntity> {

    registar(dato: T ):Observable<T>;
    findOneBy(id: string): Observable<T>
    Actualizar(id: string , dato : T ):Observable<T>;
    eliminar(id: string): Observable<T>;
    findAll(): Observable<T[]>;
    
}