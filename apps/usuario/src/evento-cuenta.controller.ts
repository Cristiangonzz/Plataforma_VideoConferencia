import { Controller } from "@nestjs/common";
import {  MessagePattern, Payload } from "@nestjs/microservices";
import { PersonaService } from "./infrastructura/service/persona.service";
import { BuscarPersonaUseCase } from "./aplicacion/useCase/persona/buscar-persona.use-case";
import { PersonaDomainEntity } from "./dominio/model/persona";
import {  Observable, map } from "rxjs";
import { PersonaSchema } from './infrastructura/dataBase/schema/persona.shema';


@Controller()
export class EventoCuentaController {

    constructor(private readonly personaService : PersonaService) {}


    @MessagePattern('cuenta.videoConferencia.creada')
    /**
     * It receives a string, it calls a use case, and it returns an observable of a string
     * @param {string} data - string
     * @returns The email of the person.
     */
    cuentaVideoConferencia(@Payload() data: string):Observable<string>{
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaSchema) =>  valor.mail)  
        )
            
    }
    

    @MessagePattern('cuenta.audioConferencia.creada')
    /**
     * It receives a string, it calls a use case, and it returns an observable of a string
     * @param {string} data - string
     * @returns The return is a string, but the return is a string that is the result of a pipe that is
     * the result of a map that is the result of a pipe that is the result of a map that is the result
     * of a pipe that is the result of a map that is the result of a pipe that is the result of a map
     * that is the result of a pipe that is the result of
     */
    cuentaAudioConferencia(@Payload() data: string):Observable<string>{
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaDomainEntity) =>  valor.mail)  
        )
            
    }

}