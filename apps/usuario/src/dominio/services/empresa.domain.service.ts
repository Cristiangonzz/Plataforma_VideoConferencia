import { Observable } from 'rxjs';
import { EmpresaDomainEntity } from '../model/empresa.model';

export interface IEmpresaDomainService<T extends EmpresaDomainEntity = EmpresaDomainEntity> {

    registar(persona:T):Observable<T>;
    findOneBy(id: string): Observable<T>
    
}
