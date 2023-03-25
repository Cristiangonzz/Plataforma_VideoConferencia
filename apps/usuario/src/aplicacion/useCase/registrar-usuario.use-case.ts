import { Observable } from "rxjs";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { IPersonaDomainService } from "../../dominio/services/persona.domain.service";
import { RegistrarPersonaDto } from '../../infrastructura/dto/registrar-persona.dto';
import { IDatosBasicosModel } from '../../dominio/model/interface/datos-basicos.interface';



export class RegistrarUsuarioUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(dato: IDatosBasicosModel): Observable<PersonaDomainEntity> {

        const dto = new RegistrarPersonaDto();
        dato.email = dto.mail;
        dato.clave = dto.clave;
        dato.nombre = dto.nombre;
        if(dato.clave == null || dato.email == null || dato.nombre == null){
            throw new Error('Datos incorrectos');
        }

        dato.clave = createHash('sha512')
        .update(dato.clave)
        .digest('hex');

        const newPersona = new PersonaDomainEntity();
        newPersona.email = dato.email;
        newPersona.clave = dato.clave;
        newPersona.nombre = dato.nombre;
        

        return this.usuarioService.registar(newPersona); 
    }
}