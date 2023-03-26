import { Observable, catchError, from, mergeMap, of } from "rxjs";
import { ValidationError, validate } from 'class-validator';
import { IEmpresaDomainService } from "apps/usuario/src/dominio/services/empresa.domain.service";
import { EmpresaDomainEntity } from "apps/usuario/src/dominio/model/empresa.model";
import { RegistrarEmpresaDto } from "apps/usuario/src/infrastructura/dto/registrar-empresa.dto";


export class RegistrarEmpresaUseCase {  
  
        constructor(private readonly empresaService: IEmpresaDomainService<EmpresaDomainEntity>) { }

        execute(dato: RegistrarEmpresaDto): Observable<EmpresaDomainEntity> {

            const observable = from(validate(dato));

            return observable.pipe(
                mergeMap((errors : ValidationError[]) => {
                    if (errors.length > 0) {
                        throw new Error('Datos incorrectos');
                    }
    
                    const newEmpresa = new EmpresaDomainEntity();
                    newEmpresa.mail = dato.mail;
                    newEmpresa.nombre = dato.nombre;
                    newEmpresa.setPassword(dato.clave);

                    newEmpresa.cantidadEmpleado = dato.cantidadEmpleado;
                    newEmpresa.rut = dato.rut;
                    newEmpresa.rubro = dato.rubro;

                    return of(newEmpresa);
                }),
                mergeMap((empresa:EmpresaDomainEntity) => {
                    return this.empresaService.registar(empresa);
                }),
                catchError((error:Error) => {
                    throw new Error(error.message);
                })); 
    }
}