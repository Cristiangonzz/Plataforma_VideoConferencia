import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { Observable, switchMap } from "rxjs";
import { VideoConferenciaDomainEntity } from '../../dominio/model/entidades/video-conferencia.dominio.entidad';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { VideoConferenciaCreadaPublisher } from '../menssaging/publisher/video-conferencia/video-conferencia-creada.publisher';
import { CrearVideoConferenciaDTO } from "../dto/crear-video-conferencia.dto";
import { CrearVideoConferenciaUseCase } from "../../aplicacion/casoDeUso/videoConferencia/crear-video-conferencia.use-case";
import { UsuarioGuard } from '../utils/usuario.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@ApiTags('VideoConferencia')
@Controller('videoConferencia')
export class VideoConferenciaController {
    constructor(
        private readonly videoConferenciaService: VideoConferenciaService,
        private readonly videoConferenciaRegistradaPublisher : VideoConferenciaCreadaPublisher,

    ) {}

    @ApiOperation ({summary: "Crear  VideoConferencia"})
    @UseGuards(UsuarioGuard)
    @Post('crear/:token')
     /**
      * The function receives a token and a CrearVideoConferenciaDTO object, then it creates a
      * CrearVideoConferenciaUseCase object, then it calls the publisher function of the
      * videoConferenciaRegistradaPublisher object, then it calls the execute function of the
      * CrearVideoConferenciaUseCase object, then it returns the result of the execute function
      * @param {string} token - string -&gt; The token that is sent by the client
      * @param {CrearVideoConferenciaDTO} dato - CrearVideoConferenciaDTO
      * @returns The return is a VideoConferenciaDomainEntity
      */
     crearVideoConferencia(@Param('token') token: string ,@Body() dato: CrearVideoConferenciaDTO):Observable<VideoConferenciaDomainEntity> {
        const caso  = new  CrearVideoConferenciaUseCase(this.videoConferenciaService);
        return this.videoConferenciaRegistradaPublisher.publisher(dato.anfitrion)
            .pipe(
                switchMap(
                    (value :string) => {
                        return  caso.execute({anfitrion:value});
                    }
                )
            );
    }

}