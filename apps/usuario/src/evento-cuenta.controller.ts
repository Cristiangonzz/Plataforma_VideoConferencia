import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { PersonaService } from "./infrastructura/service/persona.service";
import { EmpresaService } from "./infrastructura/service/empresa.service";
import { BuscarPersonaUseCase } from "./aplicacion/useCase/persona/buscar-persona.use-case";
import { PersonaDomainEntity } from "./dominio/model/persona";
import { catchError, map, tap } from "rxjs";
import { PersonaBuscadaVideoConferenciaPublisher } from "./infrastructura/messanging/publisher/cuenta/cuenta-video-conferencia/persona-buscada-video-conferencia.publisher";


@Controller()
export class EventoCuentaController {

    constructor(private readonly personaService : PersonaService,
       // private readonly empresaService : EmpresaService,
        private readonly personaBuscadaVideoConferenciaPublisher: PersonaBuscadaVideoConferenciaPublisher,
        ) {}

    // @EventPattern('cuenta.videoConferencia.creada')
    // cuentaVideoConferencia(@Payload() data: string){
    //     console.log('persona buscada para crear video conferencia',data);
        
    // }

    @MessagePattern('cuenta.videoConferencia.creada')
    cuentaVideoConferencia(@Payload() data: string){
        console.log('Mensaje recibido en el receptor: ',data);

        const caso = new BuscarPersonaUseCase(this.personaService);

        return caso.execute(data)
        .pipe(
            map( (valor:PersonaDomainEntity) =>  valor.mail)  
        )
            
    

    // @EventPattern('usuario.persona.registrada')
    // personaBuscadaAudioConferencia(@Payload() data: any) {
    //     console.log('Persona buscada para crear AudioConferencia',data);
    // }
    }
}