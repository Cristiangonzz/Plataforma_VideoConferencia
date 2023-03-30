import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { IDatosBasicosModel } from '../../../dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';
import { PersonaMongoService } from '../../../infrastructura/dataBase/services/persona.service.mongo';
import { PersonaSchema } from '../../../infrastructura/dataBase/schema/persona.shema';


export class RegistrarPersonaoUseCase {  
  
    constructor(private readonly usuarioService: PersonaMongoService) { }

        execute(dato: IDatosBasicosModel): Observable<PersonaSchema> {

           
            const newPersona = new PersonaDomainEntity();
            newPersona.mail = dato.mail;
            newPersona.nombre = dato.nombre;
            newPersona.setPassword(dato.clave);
            return this.usuarioService.registar(newPersona);
    }
}

            //const observable = from(validate(dato));

            // return observable.pipe(
            //     mergeMap((errors : ValidationError[]) => {
            //         if (errors.length > 0) {
            //             throw new Error('Datos incorrectos');
            //         }
    
            //         const newPersona = new PersonaDomainEntity();
            //         newPersona.mail = dato.mail;
            //         newPersona.nombre = dato.nombre;
            //         newPersona.setPassword(dato.clave);
            //         return of(newPersona);
            //     }),
            //     mergeMap((persona:PersonaDomainEntity) => {
            //         return this.usuarioService.registar(persona);
            //     }),
            //     catchError((error:Error) => {
            //         throw new Error(error.message);
            //     }));