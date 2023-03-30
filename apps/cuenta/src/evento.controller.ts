import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { IPersonaCuenta } from "./dominio/model/interfaces/persona.domain.interface.usuario";

@Controller()
export class EventoController {

    constructor() {
        
    }

  
    //Persona de repoUsuario

    @EventPattern('usuario.persona.registrada')
    personaCreada(@Payload() data: {data:IPersonaCuenta}):void {
        console.log('Persona registrada',data);
    }
    
    @EventPattern('usuario.persona.buscada')
    personaBuscada(@Payload() data: {data:IPersonaCuenta}):void {
        console.log('Persona buscada ',data);

    }
    @EventPattern('usuario.persona.editada')
    personaEditada(@Payload() data: {data:IPersonaCuenta}):void {
        console.log('persona editada',data);
    }
    @EventPattern('usuario.persona.eliminada')
    personaEliminada(@Payload() data: boolean):void {
        console.log('persona eliminada',data);
    }
//---------------------------------------------------------------------------
    //Empresa de repoUsuario

    @EventPattern('usuario.empresa.buscada')
    empresaCreada(@Payload() data: any):void {
        console.log('empresa registrada',data);
    }

    @EventPattern('usuario.empresa.registrada')
    empresaBuscada(@Payload() data: any):void {
        console.log('empresa buscada',data);
    }
    
}