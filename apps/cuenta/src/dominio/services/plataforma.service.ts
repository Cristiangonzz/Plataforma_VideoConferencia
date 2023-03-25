import { Observable } from 'rxjs';
import { PlataformaDomainEntity } from '../model/entidades/plataforma.domain.entidad';


export interface IPlataformaDomainService<T extends PlataformaDomainEntity = PlataformaDomainEntity> {

    registar(data: T ):Observable<T>;
    findAll(): Observable<T[]>;
    findOneBy(id: string): Observable<T>
    Actualizar(id: string , data : T ):Observable<T>;
    eliminar(id: string): Observable<T>;
    
}
