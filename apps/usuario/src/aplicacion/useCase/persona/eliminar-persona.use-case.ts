import { Observable } from 'rxjs';
import { PersonaMongoService } from '../../../infrastructura/dataBase/services/persona.service.mongo';


export class EliminarPersonaoUseCase {  
  
    constructor(private readonly usuarioService: PersonaMongoService) { }

        execute(dato: string): Observable<boolean> {

            return this.usuarioService.eliminar(dato);
    }
}