import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/registrar-persona.dto';
import { PersonaRepository } from '../dataBase/repository/persona.repositoy';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaRepository: PersonaRepository,
    ) {}

    @Post('/crear')
     crearCesion(@Body() dato: CreateCustomerDto) {
        return this.personaRepository.registar(dato);
    }
 

  
}