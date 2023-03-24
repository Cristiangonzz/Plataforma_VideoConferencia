import { Injectable } from '@nestjs/common';
import { PersonaMongoService } from '../dataBase/services/persona.service.mongo';

@Injectable()
export class PersonaService extends PersonaMongoService  {
}
