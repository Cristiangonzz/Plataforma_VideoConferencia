import { Body, Controller, Get, Post } from '@nestjs/common';
import {  RegistrarPersonaDto } from '../dto/registrar-persona.dto';
import { PersonaService } from '../service/persona.service';
import { PersonaRegistradaPublisher } from '../messanging/publisher/persona/persona-registrado.publisher';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { PersonaSchema } from '../dataBase/schema/persona.shema';
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { BuscarMail } from '../dto/buscar-mail..dto';
import { RegistrarPersonaoUseCase } from '../../aplicacion/useCase/persona/registrar-persona.use-case';
import { BuscarPersonaUseCase } from '../../aplicacion/useCase/persona/buscar-persona.use-case';
import { PersonaBuscadaPublisher } from '../messanging/publisher/persona/persona-buscada.oublisher';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService,
        private readonly personaRegistradaPublisher : PersonaRegistradaPublisher,
        private readonly personaBuscadaPublisher: PersonaBuscadaPublisher,
    ) {}

    @Post('/crear')
     crearPersona(@Body() persona: RegistrarPersonaDto):Observable<PersonaDomainEntity> {
        const caso = new RegistrarPersonaoUseCase(this.personaService);
        return caso.execute(persona)
        .pipe(
            tap((persona:RegistrarPersonaDto) => {
                this.personaRegistradaPublisher.publish(persona);
            },
            (error:Error) => {
                console.log(error);
            }));
    }

     @Get('buscar')
     buscarPersona(@Body() id: BuscarMail ):Observable<PersonaDomainEntity>{
        const caso = new BuscarPersonaUseCase(this.personaService);
        
        return caso.execute(id.mail).pipe(tap((data: PersonaDomainEntity) =>{
            this.personaBuscadaPublisher.publish(data);
        }),
        catchError((error) => {
            // Manejo de errores
            console.error('Se produjo un error al buscar la persona', error);
            throw new Error('No se pudo buscar la persona');
          }));
     }
}