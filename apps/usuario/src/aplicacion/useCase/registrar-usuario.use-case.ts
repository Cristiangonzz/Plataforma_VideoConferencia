import { Observable } from "rxjs";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { IPersonaDomainService } from "../../dominio/services/persona.domain.service";

export class RegistrarUsuarioUseCase {      /*implements IUseCase<PersonaModel, PersonaModel> Para ver que es lo que tiene que recibir el caso de uso como un camnado y una respuesta */
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(entity: PersonaDomainEntity): Observable<PersonaDomainEntity> {

        entity.clave = createHash('sha512')
        .update(entity.clave)
        .digest('hex');

        return this.usuarioService.registar(entity);
    }
}