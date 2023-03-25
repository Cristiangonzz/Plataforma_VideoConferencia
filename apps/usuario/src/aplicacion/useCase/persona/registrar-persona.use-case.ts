import { Observable } from "rxjs";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { RegistrarPersonaDto } from '../../../infrastructura/dto/registrar-persona.dto';
import { validateSync } from 'class-validator';


export class RegistrarPersonaoUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

        execute(dato: RegistrarPersonaDto): Observable<PersonaDomainEntity> {

        const errors = validateSync(dato);

        if (errors.length > 0) {
            throw new Error('Datos incorrectos');
        }

        dato.clave = createHash('sha512')
        .update(dato.clave)
        .digest('hex');

        const newPersona = new PersonaDomainEntity();
        newPersona.mail = dato.mail;
        newPersona.clave = dato.clave;
        newPersona.nombre = dato.nombre;
        

        return this.usuarioService.registar(newPersona); 
    }
}