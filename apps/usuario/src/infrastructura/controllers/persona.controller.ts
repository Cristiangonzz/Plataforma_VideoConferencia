import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/registrar-persona.dto';
import { PersonaService } from '../service/persona.service';
import { PersonaRegistradaPublisher } from '../messanging/publisher/usuario-registrado.publisher';
import { RegistrarUsuarioUseCase } from '../../aplicacion/useCase/registrar-usuario.use-case';
import { Observable, map, tap } from 'rxjs';
import { PersonaSchema } from '../dataBase/schema/persona.shema';
import { PersonaDomainEntity } from '../../dominio/model/persona';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService,
        private readonly personaRegistradaPublisher : PersonaRegistradaPublisher,
    ) {}

    @Post('/crear')
     crearPersona(@Body() persona: CreateCustomerDto):Observable<PersonaDomainEntity> {
        const caso = new RegistrarUsuarioUseCase(this.personaService);
        return caso.execute(persona)
        .pipe(
            tap((persona:CreateCustomerDto) => {
                this.personaRegistradaPublisher.publish(persona);
            },
            (error:Error) => {
                console.log(error);
            }));
    }

}