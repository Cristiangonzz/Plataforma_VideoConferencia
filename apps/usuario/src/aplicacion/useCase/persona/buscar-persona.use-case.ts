import { Observable} from "rxjs";
import { PersonaMongoService } from '../../../infrastructura/dataBase/services/persona.service.mongo';
import { PersonaSchema } from '../../../infrastructura/dataBase/schema/persona.shema';


export class BuscarPersonaUseCase {  
  
    constructor(private readonly usuarioService: PersonaMongoService) { }

    execute(dato: string): Observable<PersonaSchema> {
        return this.usuarioService.findOneBy(dato);
    }
}

//return of(dato)
//      .pipe(
//      throwIfEmpty(() => new Error('Dato requerido')),
//      mergeMap((datoValidado :string) => {

//          return this.usuarioService.findOneBy(datoValidado)
//      }),
//      catchError((err : Error) => {
//          throw new Error(`No se encontró la persona (Caso de uso) ${err.message}`);
//      })
//  );