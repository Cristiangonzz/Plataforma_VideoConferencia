import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class EventoController {

    constructor() {}

    @EventPattern('usuario.persona.registrada')
    personaCreada(@Payload() data: any) {
        console.log('Persona registrada',data);
    }
}