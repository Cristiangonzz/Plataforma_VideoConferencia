import { Body, Controller, Get, Post } from '@nestjs/common';
import {  RegistrarPersonaDto } from '../dto/registrar-persona.dto';
import { PersonaService } from '../service/persona.service';
import { PersonaRegistradaPublisher } from '../messanging/publisher/usuario-registrado.publisher';
import { RegistrarUsuarioUseCase } from '../../aplicacion/useCase/registrar-usuario.use-case';
import { Observable, map, tap } from 'rxjs';
import { PersonaSchema } from '../dataBase/schema/persona.shema';
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { BuscarMail } from '../dto/buscar-mail..dto';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService,
        private readonly personaRegistradaPublisher : PersonaRegistradaPublisher,
    ) {}

    @Post('/crear')
     crearPersona(@Body() persona: RegistrarPersonaDto):Observable<PersonaDomainEntity> {
        const caso = new RegistrarUsuarioUseCase(this.personaService);
        return caso.execute(persona)
        .pipe(
            tap((persona:RegistrarPersonaDto) => {
                this.personaRegistradaPublisher.publish(persona);
            },
            (error:Error) => {
                console.log(error);
            }));
    }

    // @Get('buscar')
    // buscarPersona(@Body() id: BuscarMail ):Observable<PersonaDomainEntity>{
        
    // }
    

}