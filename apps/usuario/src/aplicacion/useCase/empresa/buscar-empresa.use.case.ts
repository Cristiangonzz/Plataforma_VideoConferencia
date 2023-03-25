import { Observable } from "rxjs";
import { PersonaDomainEntity } from "../../../dominio/model/persona";
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { BuscarMail } from '../../../infrastructura/dto/buscar-mail..dto';
import { validateSync } from "class-validator";
import { IEmpresaDomainModel } from '../../../dominio/model/interface/empresa.interface';
import { EmpresaDomainEntity } from '../../../dominio/model/empresa.model';
import { IEmpresaDomainService } from '../../../dominio/services/empresa.domain.service';



export class BuscarempresaUseCase {  
  
    constructor(private readonly empresaService: IEmpresaDomainService<EmpresaDomainEntity>) { }

    execute(dato: BuscarMail): Observable<EmpresaDomainEntity> {

        const errors = validateSync(dato);

        if (errors.length > 0) {
            throw new Error('Mail de empresa incorrecto');
        }
        

        return this.empresaService.findOneBy(dato.mail); 
    }
}