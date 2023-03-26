import { Observable, catchError, mergeMap, of, throwIfEmpty } from "rxjs";
import { PersonaDomainEntity } from "../../../dominio/model/persona";
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";


export class BuscarPersonaUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(dato: string): Observable<PersonaDomainEntity> {
       
        return of(dato).pipe(
            throwIfEmpty(() => new Error('Dato requerido')),
            mergeMap((datoValidado :string) => {
                return this.usuarioService.findOneBy(datoValidado);
            }),
            catchError((err : Error) => {
                throw new Error('No se encontró la persona');
            })
        );
    }
}