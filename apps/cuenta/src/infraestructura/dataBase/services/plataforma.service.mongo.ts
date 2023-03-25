import { Injectable } from "@nestjs/common";
import { IPlataformaDomainService } from "apps/cuenta/src/dominio/services/plataforma.service";
import { Observable } from "rxjs";
import { PlataformaSchema } from '../schema/plataforma.schema';
import { PlataformaRepository } from '../repository/plataforma.repository';


@Injectable()
export class PlataformaMongoService
  implements IPlataformaDomainService<PlataformaSchema>
{
 
  constructor(private readonly plataformaRepository: PlataformaRepository) {}

    registar(dato: PlataformaSchema): Observable<PlataformaSchema> {
        return this.plataformaRepository.registar(dato);
    }
    findAll(): Observable<PlataformaSchema[]> {
        return this.plataformaRepository.findAll();
    }
    findOneBy(id: string): Observable<PlataformaSchema> {
        return this.plataformaRepository.findOneBy(id);
    }
    Actualizar(id: string, dato: PlataformaSchema): Observable<PlataformaSchema> {
       return this.plataformaRepository.actualizar(id, dato);
    }
    eliminar(id: string): Observable<PlataformaSchema> {
        return this.plataformaRepository.eliminar(id);
    }

}