
import { Observable } from 'rxjs';
import { PersonaDomainEntity } from '../model/persona';

export interface IPersonaDomainService<T extends PersonaDomainEntity = PersonaDomainEntity> {

    registar(persona:T):Observable<T>;
    findAll(): Observable<T[]>;
    findOneBy(id: string): Observable<T>
    Actualizar(id: string ,perosna : T ):Observable<T>;
    eliminar(id: string): Observable<T>;
    

}
