import { Controller } from "@nestjs/common";
import {  MessagePattern, Payload } from "@nestjs/microservices";
import { PersonaService } from "./infrastructura/service/persona.service";
import { BuscarPersonaUseCase } from "./aplicacion/useCase/persona/buscar-persona.use-case";
import { PersonaDomainEntity } from "./dominio/model/persona";
import {  map } from "rxjs";


@Controller()
export class EventoCuentaController {

    constructor(private readonly personaService : PersonaService) {}


    @MessagePattern('cuenta.videoConferencia.creada')
    cuentaVideoConferencia(@Payload() data: string){
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaDomainEntity) =>  valor.mail)  
        )
            
    }
    

    @MessagePattern('cuenta.audioConferencia.creada')
    cuentaAudioConferencia(@Payload() data: string){
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaDomainEntity) =>  valor.mail)  
        )
            
    }

}