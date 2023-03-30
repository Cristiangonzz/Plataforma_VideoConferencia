import { Observable, catchError, from, mergeMap } from "rxjs";
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { ValidationError, validate } from "class-validator";
import { ILoginModelDomain } from "apps/usuario/src/dominio/model/interface/login.model";
import { BuscarPersonaUseCase } from "./buscar-persona.use-case";


export class LogearPersonaoUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

        execute(dato: ILoginModelDomain): Observable<PersonaDomainEntity> {


            
            // const observable = from(validate(dato));

            // return observable.pipe(
            //     mergeMap((errors : ValidationError[]) => {
            //         if (errors.length > 0) {
            //             throw new Error('Datos incorrectos');
            //         }
    

            //         const newPersona =  new BuscarPersonaUseCase(this.usuarioService).execute(dato.mail);
                  
            //         return newPersona;
            //     }),
            //     catchError((error:Error) => {
            //         throw new Error(error.message);
            //     }));
         
    }

   
}