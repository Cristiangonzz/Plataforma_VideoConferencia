import { Injectable } from "@nestjs/common";
import { IEmpresaDomainService } from '../../../dominio/services/empresa.domain.service';
import { EmpresaSchema } from '../schema/plataforma.schema';
import { EmpresaRepository } from '../repository/empresa.repository';
import { Observable } from "rxjs";


@Injectable()
export class EmpresaMongoService
  implements IEmpresaDomainService<EmpresaSchema>
{
 
  constructor(private readonly empresaRepository: EmpresaRepository) {}

    registar(persona: EmpresaSchema): Observable<EmpresaSchema> {
        return this.empresaRepository.registar(persona);
    }
    findAll(): Observable<EmpresaSchema[]> {
        return this.empresaRepository.findAll();
    }
    findOneBy(id: string): Observable<EmpresaSchema> {
        return this.empresaRepository.findOneBy(id);
    }
    Actualizar(id: string, perosna: EmpresaSchema): Observable<EmpresaSchema> {
       return this.empresaRepository.actualizar(id, perosna);
    }
    eliminar(id: string): Observable<EmpresaSchema> {
        return this.empresaRepository.eliminar(id);
    }



  

 



}