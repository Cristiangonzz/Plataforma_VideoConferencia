import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable, from, tap } from "rxjs";


import { AudioConferenciaService } from '../services/audio-conferencia.service';
import { AudioConferenciaCreadaPublisher } from "../menssaging/publisher/video-conferencia/audio-conferencia-creada.publisher";
import { AudioConferenciaBuscadaPublisher } from "../menssaging/publisher/video-conferencia/audio-conferencia-buscada.publisher";
import { CrearAudioConferenciaDTO } from '../dto/crear-audio-conferencia.dto';
import { BuscarAudioConferenciaDto } from "../dto/buscar-audio-conferencia.dto";
import { AudioConferenciaDomainEntity } from '../../dominio/model/entidades/audio-conferencia.dominio.entidad';
import { CrearAudioConferenciaUseCase } from "../../aplicacion/casoDeUso/audioConferencia/crear-audio-conferencia.use-case";
import { BuscarAudioConferenciaUseCase } from "../../aplicacion/casoDeUso/audioConferencia/buscar-audio-conferencia.use-case";

@Controller('audio-conferencia')
export class AudioConferenciaController {
    constructor(
        private readonly audioConferenciaService: AudioConferenciaService,
        private readonly audioConferenciaRegistradaPublisher : AudioConferenciaCreadaPublisher,
        private readonly audioConferenciaBuscadaPublisher: AudioConferenciaBuscadaPublisher ,
    ) {}

    @Post('crear')
     crearAudioConferencia(@Body() dato: CrearAudioConferenciaDTO):Observable<AudioConferenciaDomainEntity> {
        const caso  = new  CrearAudioConferenciaUseCase(this.audioConferenciaService);
        return from(caso.execute(dato))
        .pipe(
            tap((audioconferencia:CrearAudioConferenciaDTO) => {
                this.audioConferenciaRegistradaPublisher.publish(audioconferencia);
            },
            (error:Error) => {
                console.log(error);
            }));
    }

     @Get('buscar')
     buscarAudioConferencia(@Body() id: BuscarAudioConferenciaDto ):Observable<AudioConferenciaDomainEntity>{
        const caso = new BuscarAudioConferenciaUseCase(this.audioConferenciaService);
        
        return caso.execute(id.id).pipe(tap((data: AudioConferenciaDomainEntity) =>{
            this.audioConferenciaBuscadaPublisher.publish(data);
        }),
        );
     }
}