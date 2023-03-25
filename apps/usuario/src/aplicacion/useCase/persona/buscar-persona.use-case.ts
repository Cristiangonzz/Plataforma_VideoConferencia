import { Observable } from "rxjs";
import { PersonaDomainEntity } from "../../../dominio/model/persona";
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { BuscarMail } from '../../../infrastructura/dto/buscar-mail..dto';
import { validateSync } from "class-validator";



export class BuscarPersonaUseCase {  
  
    constructor(private readonly usuarioService: IPersonaDomainService<PersonaDomainEntity>) { }

    execute(dato: BuscarMail): Observable<PersonaDomainEntity> {

        const errors = validateSync(dato);

        if (errors.length > 0) {
            throw new Error('Mail de persona incorrecto');
        }
        

        return this.usuarioService.findOneBy(dato.mail); 
    }
}