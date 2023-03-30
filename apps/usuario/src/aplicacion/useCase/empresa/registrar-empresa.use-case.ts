import { Observable } from "rxjs";
import { RegistrarEmpresaDto } from "../../../../src/infrastructura/dto/registrar-empresa.dto";
import { EmpresaMongoService } from '../../../infrastructura/dataBase/services/empresa.service.mongo';
import { EmpresaSchema } from '../../../infrastructura/dataBase/schema/empresa.shema';


export class RegistrarEmpresaUseCase {  
  
        constructor(private readonly empresaService: EmpresaMongoService) { }

        execute(dato: RegistrarEmpresaDto): Observable<EmpresaSchema> {
            
            const newEmpresa = new EmpresaSchema();

            newEmpresa.mail = dato.mail;
            newEmpresa.nombre = dato.nombre;
            newEmpresa.setPassword(dato.clave);
        
            newEmpresa.cantidadEmpleado = dato.cantidadEmpleado;
            newEmpresa.rut = dato.rut;
            newEmpresa.rubro = dato.rubro;
            
            return this.empresaService.registar(newEmpresa);
    }
}





//const observable = from(validate(dato));

// return observable.pipe(
//     mergeMap((errors : ValidationError[]) => {
//         if (errors.length > 0) {
//             throw new Error('Datos incorrectos');
//         }

//         const newEmpresa = new EmpresaDomainEntity();
//         newEmpresa.mail = dato.mail;
//         newEmpresa.nombre = dato.nombre;
//         newEmpresa.setPassword(dato.clave);

//         newEmpresa.cantidadEmpleado = dato.cantidadEmpleado;
//         newEmpresa.rut = dato.rut;
//         newEmpresa.rubro = dato.rubro;

//         return of(newEmpresa);
//     }),
//     mergeMap((empresa:EmpresaDomainEntity) => {
//         return this.empresaService.registar(empresa);
//     }),
//     catchError((error:Error) => {
//         throw new Error(error.message);
//     })); 