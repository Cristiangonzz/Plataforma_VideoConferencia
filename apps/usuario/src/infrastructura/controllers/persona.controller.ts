import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/registrar-persona.dto';
import { PersonaRepository } from '../dataBase/repository/persona.repositoy';
import { PersonaService } from '../service/persona.service';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService,
    ) {}

    @Post('/crear')
     crearPersona(@Body() dato: CreateCustomerDto) {
        return this.personaService.registar(dato);
    }

}