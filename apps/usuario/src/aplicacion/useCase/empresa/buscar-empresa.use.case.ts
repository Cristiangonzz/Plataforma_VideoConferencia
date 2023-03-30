import { Observable} from "rxjs";
import { EmpresaMongoService } from "apps/usuario/src/infrastructura/dataBase/services/empresa.service.mongo";
import { EmpresaSchema } from "apps/usuario/src/infrastructura/dataBase/schema/empresa.shema";



export class BuscarEmpresaUseCase {  
  
    constructor(private readonly empresaService: EmpresaMongoService) { }

    execute(dato: string): Observable<EmpresaSchema> {
        return this.empresaService.findOneBy(dato);
        
    }
}
