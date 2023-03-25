import { Observable } from 'rxjs';
import { VideoConferenciaDomainEntity } from '../model/entidades/video-conferencia.dominio.entidad';


export interface IVideoConferenciaDomainService<T extends VideoConferenciaDomainEntity = VideoConferenciaDomainEntity> {

    registar(dato: T ):Observable<T>;
    findOneBy(id: string): Observable<T>
    Actualizar(id: string , dato : T ):Observable<T>;
    eliminar(id: string): Observable<T>;
    findAll(): Observable<T[]>;
    
}