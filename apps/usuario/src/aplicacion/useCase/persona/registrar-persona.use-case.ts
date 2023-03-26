import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { IDatosBasicosModel } from '../../../dominio/model/interface/datos-basicos.interface';
import { ValidationError, validate } from "class-validator";


export class RegistrarPersonaoUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

        execute(dato: IDatosBasicosModel): Observable<PersonaDomainEntity> {

            const observable = from(validate(dato));

            return observable.pipe(
                mergeMap((errors : ValidationError[]) => {
                    if (errors.length > 0) {
                        throw new Error('Datos incorrectos');
                    }
    
                    const newPersona = new PersonaDomainEntity();
                    newPersona.mail = dato.mail;
                    newPersona.nombre = dato.nombre;
                    newPersona.setPassword(dato.clave);
                    return of(newPersona);
                }),
                mergeMap((persona:PersonaDomainEntity) => {
                    return this.usuarioService.registar(persona);
                }),
                catchError((error:Error) => {
                    throw new Error(error.message);
                }));
         
    }
}