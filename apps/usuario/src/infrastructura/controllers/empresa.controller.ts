import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/registrar-persona.dto';
import { PersonaRepository } from '../dataBase/repository/persona.repositoy';
import { EmpresaRepository } from '../dataBase/repository/empresa.repository';
import { CrearEmpresaDto } from '../dto/registrar-empresa.dto';


@Controller('empresa')
export class EmpresaController {
    constructor(
        private readonly empresaRepository: EmpresaRepository,
    ) {}

    @Post('/crear')
     crearPersona(@Body() dato: CrearEmpresaDto) {
        return this.empresaRepository.registar(dato);
    }

}