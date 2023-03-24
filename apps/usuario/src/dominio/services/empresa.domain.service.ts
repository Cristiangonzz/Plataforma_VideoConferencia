import { Observable } from 'rxjs';
import { EmpresaDomainEntity } from '../model/empresa.model';

export interface IEmpresaDomainService<T extends EmpresaDomainEntity = EmpresaDomainEntity> {

    registar(persona:T):Observable<T>;
    findAll(): Observable<T[]>;
    findOneBy(id: string): Observable<T>
    Actualizar(id: string ,perosna : T ):Observable<T>;
    eliminar(id: string): Observable<T>;
    
}
