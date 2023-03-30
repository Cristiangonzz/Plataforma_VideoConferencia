import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IDatosBasicosModel } from '../../../dominio/model/interface/datos-basicos.interface';
import { Observable } from 'rxjs';
import { PersonaMongoService } from '../../../infrastructura/dataBase/services/persona.service.mongo';
import { PersonaSchema } from '../../../infrastructura/dataBase/schema/persona.shema';


export class EditarPersonaoUseCase {  
  
    constructor(private readonly usuarioService: PersonaMongoService) { }

        execute(id: string, dato: IDatosBasicosModel): Observable<PersonaSchema> {
            
            const newPersona = new PersonaDomainEntity();
            newPersona.mail = dato.mail;
            newPersona.nombre = dato.nombre;
            newPersona.setPassword(dato.clave);
            return this.usuarioService.actualizar(id,newPersona);
    }
}