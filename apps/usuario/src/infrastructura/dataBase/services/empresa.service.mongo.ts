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

    /**
     * This function takes an object of type EmpresaSchema and returns an Observable of type
     * EmpresaSchema.
     * @param {EmpresaSchema} empresa - EmpresaSchema
     * @returns Observable&lt;EmpresaSchema&gt;
     */
    registar(empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return this.empresaRepository.registar(empresa);
    }
    /**
     * This function returns an Observable of type EmpresaSchema
     * @param {string} id - string
     * @returns An Observable of type EmpresaSchema
     */
    findOneBy(id: string): Observable<EmpresaSchema> {
        return this.empresaRepository.findOneBy(id);
    }
   



  

 



}