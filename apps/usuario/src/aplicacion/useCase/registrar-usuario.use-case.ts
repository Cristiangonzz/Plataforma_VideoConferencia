import { Observable } from "rxjs";
import { IUsuarioRepository } from "../../dominio/repositories/usuario-repository-base.repositoy";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../dominio/model/persona';

export class RegistrarUsuarioUseCase {      /*implements IUseCase<PersonaModel, PersonaModel> Para ver que es lo que tiene que recibir el caso de uso como un camnado y una respuesta */
    constructor(private readonly usuarioRepository: IUsuarioRepository<PersonaDomainEntity>) { }

    execute(entity: PersonaDomainEntity): Observable<PersonaDomainEntity> {

        entity.clave = createHash('sha512')
        .update(entity.clave)
        .digest('hex');

        return this.usuarioRepository.registar(entity);
    }
}