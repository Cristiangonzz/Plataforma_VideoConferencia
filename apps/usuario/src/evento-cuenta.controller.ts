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
    cuentaVideoConferencia(@Payload() data: string):Observable<string>{
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaSchema) =>  valor.mail)  
        )
            
    }
    

    @MessagePattern('cuenta.audioConferencia.creada')
    cuentaAudioConferencia(@Payload() data: string):Observable<string>{
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaDomainEntity) =>  valor.mail)  
        )
            
    }

}