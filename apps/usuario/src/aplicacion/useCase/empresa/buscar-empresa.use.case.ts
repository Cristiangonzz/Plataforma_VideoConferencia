import { Observable, catchError, mergeMap, of, throwIfEmpty } from "rxjs";
import { EmpresaDomainEntity } from '../../../dominio/model/empresa.model';
import { IEmpresaDomainService } from '../../../dominio/services/empresa.domain.service';



export class BuscarEmpresaUseCase {  
  
    constructor(private readonly empresaService: IEmpresaDomainService<EmpresaDomainEntity>) { }

    execute(dato: string): Observable<EmpresaDomainEntity> {

        return of(dato).pipe(
            throwIfEmpty(() => new Error('Dato requerido')),
            mergeMap((datoValidado :string) => {
                return this.empresaService.findOneBy(datoValidado);
            }),
            catchError((err : Error) => {
                throw new Error('No se encontró la Empresa');
            })
        );
    }
}