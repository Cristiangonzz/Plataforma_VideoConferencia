import { Body, Controller, Post } from "@nestjs/common";
import { Observable, switchMap } from "rxjs";


import { AudioConferenciaService } from '../services/audio-conferencia.service';
import { AudioConferenciaCreadaPublisher } from "../menssaging/publisher/video-conferencia/audio-conferencia-creada.publisher";
import { CrearAudioConferenciaDTO } from '../dto/crear-audio-conferencia.dto';
import { AudioConferenciaDomainEntity } from '../../dominio/model/entidades/audio-conferencia.dominio.entidad';
import { CrearAudioConferenciaUseCase } from "../../aplicacion/casoDeUso/audioConferencia/crear-audio-conferencia.use-case";
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@ApiTags('AudioConferencia')
@Controller('audioConferencia')
export class AudioConferenciaController {
    constructor(
        private readonly audioConferenciaService: AudioConferenciaService,
        private readonly audioConferenciaRegistradaPublisher : AudioConferenciaCreadaPublisher,
    ) {}

    @ApiOperation ({summary: "Crear  AudioConferencia"})
    @Post('crear')
     /**
      * It creates an audio conference, and then publishes the audio conference's host to a message
      * broker
      * @param {CrearAudioConferenciaDTO} dato - CrearAudioConferenciaDTO
      * @returns An Observable of AudioConferenciaDomainEntity
      */
     crearAudioConferencia(@Body() dato: CrearAudioConferenciaDTO):Observable<AudioConferenciaDomainEntity> {
        const caso  = new  CrearAudioConferenciaUseCase(this.audioConferenciaService);
        return this.audioConferenciaRegistradaPublisher.publish(dato.anfitrion)
            .pipe(
                switchMap(
                    (value:string) => {
                        return  caso.execute({anfitrion:value});
                    }
                )
            );
    }

}