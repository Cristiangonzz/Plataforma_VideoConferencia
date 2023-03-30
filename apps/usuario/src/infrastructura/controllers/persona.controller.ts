import { Body, Controller, Get, Param, Post, Put ,Delete} from '@nestjs/common';
import {  RegistrarPersonaDto } from '../dto/registrar-persona.dto';
import { PersonaService } from '../service/persona.service';
import { PersonaRegistradaPublisher } from '../messanging/publisher/persona/persona-registrado.publisher';
import { Observable, catchError, tap } from 'rxjs';
import { PersonaDomainEntity } from '../../dominio/model/persona';
import { BuscarMail } from '../dto/buscar-mail..dto';
import { RegistrarPersonaoUseCase } from '../../aplicacion/useCase/persona/registrar-persona.use-case';
import { BuscarPersonaUseCase } from '../../aplicacion/useCase/persona/buscar-persona.use-case';
import { PersonaBuscadaPublisher } from '../messanging/publisher/persona/persona-buscada.publisher';
import { EditarPersonaoUseCase } from '../../aplicacion/useCase/persona/editar-persona.use-case';
import { PersonaEditadaPublisher } from '../messanging/publisher/persona/persona-editada.publisher';
import { PersonaEliminadaPublisher } from '../messanging/publisher/persona/persona-eliminada.publisher';
import { PersonaSchema } from '../dataBase/schema/persona.shema';
import { EliminarPersonaoUseCase } from '../../aplicacion/useCase/persona/eliminar-persona.use-case';


@Controller('persona')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService,
        private readonly personaRegistradaPublisher : PersonaRegistradaPublisher,
        private readonly personaBuscadaPublisher: PersonaBuscadaPublisher,
        private readonly personaEditadaPublisher: PersonaEditadaPublisher,
        private readonly personaEliminadaPublisher: PersonaEliminadaPublisher,
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

    @Put('editar/:id')
       editarPersona(@Param('id') id : string,@Body() personaEditada: RegistrarPersonaDto ):Observable<PersonaSchema>{  
            const caso = new EditarPersonaoUseCase(this.personaService);
            return caso.execute(id,personaEditada).pipe(tap((data: PersonaDomainEntity) =>{
               this.personaEditadaPublisher.publish(data);
           }),
           catchError((error) => {
               // Manejo de errores
               console.error('Se produjo un error al editar la persona', error);
               throw new Error('No se pudo editar la persona');
             }));
       }

    @Delete('eliminar')
        eliminarPersona(@Body() id: BuscarMail ):Observable<boolean>{
            const caso = new EliminarPersonaoUseCase(this.personaService);

            return caso.execute(id.mail).pipe(tap((data: boolean) =>{
                this.personaEliminadaPublisher.publish(data);
            }),
            catchError((error) => {
                // Manejo de errores
                console.error('Se produjo un error al eliminar la persona', error);
                throw new Error('No se pudo eliminar la persona');
              }));
        }

}