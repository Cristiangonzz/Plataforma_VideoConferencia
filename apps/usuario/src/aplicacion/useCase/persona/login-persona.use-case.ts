import { Observable, from, mergeMap, of, switchMap } from 'rxjs';
import { PersonaMongoService } from '../../../infrastructura/dataBase/services/persona.service.mongo';
import { LogearseDto } from 'apps/usuario/src/infrastructura/dto/logarse.dto';
import * as jwt from 'jsonwebtoken';

import { createHash } from 'crypto';

export class LogearPersonaoUseCase {  
  
    constructor(private readonly usuarioService: PersonaMongoService) { }

        execute(dato: LogearseDto): Observable<string> {
            console.log("ver la clase para testing",dato.mail)
            return from(this.usuarioService.findOneBy(dato.mail)).pipe(
                switchMap((persona) => {
                    const hash = createHash('sha256');
                    hash.update(dato.clave);
                    dato.clave = hash.digest('hex');
                   if(persona.clave !== dato.clave) throw new Error("Credenciales incorrectas");
                           
                    return of(jwt.sign({persona},process.env.TOKEN || `tokenEntrada`));

                  })
                );
    
        }
}
