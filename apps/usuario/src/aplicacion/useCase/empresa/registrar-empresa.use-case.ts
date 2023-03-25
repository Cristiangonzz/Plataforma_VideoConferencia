import { Observable } from "rxjs";
import { createHash } from "crypto";
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { IPersonaDomainService } from "../../../dominio/services/persona.domain.service";
import { RegistrarPersonaDto } from '../../../infrastructura/dto/registrar-persona.dto';
import { validateSync } from 'class-validator';
import { IEmpresaDomainService } from "apps/usuario/src/dominio/services/empresa.domain.service";
import { EmpresaDomainEntity } from "apps/usuario/src/dominio/model/empresa.model";
import { RegistrarEmpresaDto } from "apps/usuario/src/infrastructura/dto/registrar-empresa.dto";


export class RegistrarEmpresaUseCase {  
  
        constructor(private readonly empresaService: IEmpresaDomainService<EmpresaDomainEntity>) { }

        execute(dato: RegistrarEmpresaDto): Observable<EmpresaDomainEntity> {

        const errors = validateSync(dato);

        if (errors.length > 0) {
            throw new Error('Datos incorrectos');
        }

        dato.clave = createHash('sha512')
        .update(dato.clave)
        .digest('hex');

        const nuevaEmpresa = new EmpresaDomainEntity();
        nuevaEmpresa.mail = dato.mail;
        nuevaEmpresa.clave = dato.clave;
        nuevaEmpresa.nombre = dato.nombre;
        nuevaEmpresa.cantidadEmpleado = dato.cantidadEmpleado;
        nuevaEmpresa.rubro = dato.rubro;
        nuevaEmpresa.rut = dato.rut;        

        return this.empresaService.registar(nuevaEmpresa); 
    }
}