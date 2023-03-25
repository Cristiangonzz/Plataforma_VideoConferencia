import { Observable } from "rxjs";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { IPersonaDomainService } from "../../dominio/services/persona.domain.service";



export class RegistrarUsuarioUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(entity: PersonaDomainEntity): Observable<PersonaDomainEntity> {

        entity.clave = createHash('sha512')
        .update(entity.clave)
        .digest('hex');

        return this.usuarioService.registar(entity); 
    }
}