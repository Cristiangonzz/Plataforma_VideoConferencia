import { PersonaSchema } from '../schema/persona.shema';
import { IPersonaDomainService } from '../../../dominio/services/persona.domain.service';
import { Injectable } from '@nestjs/common';
import { PersonaRepository } from '../repository/persona.repositoy';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaMongoService
  implements IPersonaDomainService<PersonaSchema>
{
 
  constructor(private readonly personaRepository: PersonaRepository) {}

    registar(persona: PersonaSchema): Observable<PersonaSchema> {
        return this.personaRepository.registar(persona);
    }
    findOneBy(id: string): Observable<PersonaSchema> {
        return this.personaRepository.findOneBy(id);
    }
   

}
