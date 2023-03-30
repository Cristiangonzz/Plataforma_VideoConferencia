import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { IPersonaCuenta } from "./dominio/model/interfaces/persona.domain.interface.usuario";

@Controller()
export class EventoController {

    constructor() {
        
    }

    //Respuesta de Usuarios a eventos de VideoConferencia
    @EventPattern('usuario.persona.buscada.videoConferencia')
    personaBuscadaVideoConferencia(@Payload() data: any) {
        console.log('Persona buscada',data);

    }
  
    //Persona de repoUsuario
    @EventPattern('usuario.persona.registrada')
    personaCreada(@Payload() data: {data:IPersonaCuenta}):void {
        console.log('Persona registrada',data);
    }
    
    @EventPattern('usuario.persona.buscada')
    personaBuscada(@Payload() data: any):void {
        console.log('Persona buscada ',data);

    }
    @EventPattern('usuario.empresa.buscada')
    empresaCreada(@Payload() data: any):void {
        console.log('empresa registrada',data);
    }

    @EventPattern('usuario.empresa.registrada')
    empresaBuscada(@Payload() data: any):void {
        console.log('empresa buscada',data);
    }
}