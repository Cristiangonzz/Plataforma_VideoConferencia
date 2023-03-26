import { Injectable } from "@nestjs/common";
import { IEmpresaDomainService } from '../../../dominio/services/empresa.domain.service';
import { EmpresaSchema } from '../schema/empresa.shema';
import { EmpresaRepository } from '../repository/empresa.repository';
import { Observable } from "rxjs";


@Injectable()
export class EmpresaMongoService
  implements IEmpresaDomainService<EmpresaSchema>
{
 
  constructor(private readonly empresaRepository: EmpresaRepository) {}

    registar(empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return this.empresaRepository.registar(empresa);
    }
    findAll(): Observable<EmpresaSchema[]> {
        return this.empresaRepository.findAll();
    }
    findOneBy(id: string): Observable<EmpresaSchema> {
        return this.empresaRepository.findOneBy(id);
    }
    Actualizar(id: string, empresa: EmpresaSchema): Observable<EmpresaSchema> {
       return this.empresaRepository.actualizar(id, empresa);
    }
    eliminar(id: string): Observable<EmpresaSchema> {
        return this.empresaRepository.eliminar(id);
    }



  

 



}