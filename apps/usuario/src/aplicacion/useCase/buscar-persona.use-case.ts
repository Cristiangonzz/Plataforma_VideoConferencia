import { Observable } from "rxjs";
import { PersonaDomainEntity } from "../../dominio/model/persona";
import { IPersonaDomainService } from "../../dominio/services/persona.domain.service";
import { BuscarMail } from '../../infrastructura/dto/buscar-mail..dto';



export class RegistrarUsuarioUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(entity: ): Observable<PersonaDomainEntity> {

        const dto = new BuscarMail();
        entity.email = dto.mail;
        if(entity.email == null){
            throw new Error('Mail incorrecto');
        }

        return this.usuarioService.findOneBy(entity); 
    }
}