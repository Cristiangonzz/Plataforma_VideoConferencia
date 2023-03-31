
import { Observable } from 'rxjs';
import { PersonaDomainEntity } from '../model/persona';

export interface IPersonaDomainService<T extends PersonaDomainEntity = PersonaDomainEntity> {

    registar(persona:T):Observable<T>;
    findOneBy(id: string): Observable<T>
    actualizar(id :string ,persona: T): Observable<T>;
    eliminar(id: string): Observable<boolean>;

}
