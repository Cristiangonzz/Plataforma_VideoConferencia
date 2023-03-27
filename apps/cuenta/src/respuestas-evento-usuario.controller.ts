import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class EventoRespuestaUsuarioController {

    constructor() {
        
    }

    @EventPattern('cuenta.respuesta.videoConferencia.registrada')
    personaCreada(@Payload() data: any) {
        console.log('video conferencia creada por : ',data);
    }
 
}