import { PersonaSchema } from '../schema/video-conferencia.schema';
import { IPersonaDomainService } from '../../../dominio/services/persona.domain.service';
import { Injectable } from '@nestjs/common';
import { PersonaRepository } from '../repository/video-conferencia.repositoy';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaMongoService
  implements IPersonaDomainService<PersonaSchema>
{
 
  constructor(private readonly personaRepository: PersonaRepository) {}

    registar(persona: PersonaSchema): Observable<PersonaSchema> {
        return this.personaRepository.registar(persona);
    }
    findAll(): Observable<PersonaSchema[]> {
        return this.personaRepository.findAll();
    }
    findOneBy(id: string): Observable<PersonaSchema> {
        return this.personaRepository.findOneBy(id);
    }
    Actualizar(id: string, perosna: PersonaSchema): Observable<PersonaSchema> {
       return this.personaRepository.actualizar(id, perosna);
    }
    eliminar(id: string): Observable<PersonaSchema> {
        return this.personaRepository.eliminar(id);
    }

}
