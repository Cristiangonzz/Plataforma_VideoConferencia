import { Observable } from 'rxjs';
import { VideoConferenciaDomainEntity } from '../model/entidades/video-conferencia.dominio.entidad';


export interface IVideoConferenciaDomainService<T extends VideoConferenciaDomainEntity = VideoConferenciaDomainEntity> {

    crearVideoConferencia(dato: T ):Observable<T>;
    findOneBy(id: string): Observable<T>
    ActualizarVideoConferencia(id: string , dato : T ):Observable<T>;
    eliminarVideoConferencia(id: string): Observable<T>;
    findAll(): Observable<T[]>;
    
}