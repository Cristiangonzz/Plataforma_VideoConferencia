import { Observable } from "rxjs";
import { PersonaModel } from "../../dominio/model/persona";
import { IUsuarioRepository } from "../../dominio/repositories/usuario.repositoy";
import { createHash } from "crypto";

export class RegistrarUsuarioUseCase {      /*implements IUseCase<PersonaModel, PersonaModel> Para ver que es lo que tiene que recibir el caso de uso como un camnado y una respuesta */
    constructor(private readonly usuarioRepository: IUsuarioRepository<PersonaModel>) { }

    execute(entity: PersonaModel): Observable<PersonaModel> {

        entity.contrasenia = createHash('sha512')
        .update(entity.contrasenia)
        .digest('hex');

        return this.usuarioRepository.registar(entity);
    }
}