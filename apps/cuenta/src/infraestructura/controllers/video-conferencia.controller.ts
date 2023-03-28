import { Body, Controller, Post } from "@nestjs/common";
import { Observable, switchMap } from "rxjs";
import { VideoConferenciaDomainEntity } from '../../dominio/model/entidades/video-conferencia.dominio.entidad';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { VideoConferenciaCreadaPublisher } from '../menssaging/publisher/video-conferencia/video-conferencia-creada.publisher';
import { CrearVideoConferenciaDTO } from "../dto/crear-video-conferencia.dto";
import { CrearVideoConferenciaUseCase } from "../../aplicacion/casoDeUso/videoConferencia/crear-video-conferencia.use-case";

@Controller('videoConferencia')
export class VideoConferenciaController {
    constructor(
        private readonly videoConferenciaService: VideoConferenciaService,
        private readonly videoConferenciaRegistradaPublisher : VideoConferenciaCreadaPublisher,

    ) {}

    @Post('crear')
     crearVideoConferencia(@Body() dato: CrearVideoConferenciaDTO):Observable<VideoConferenciaDomainEntity> {
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

    //  @Get('buscar')
    //  buscarVideoConferencia(@Body() id: BuscarVideoConferenciaDto ):Observable<VideoConferenciaDomainEntity>{
    //      const caso = new BuscarVideoConferenciaUseCase(this.videoConferenciaService);
        
    //      return caso.execute(id.id).pipe(tap((data: VideoConferenciaDomainEntity) =>{
    //          this.videoConferenciaBuscadaPublisher.publish(data);
    //      }));
    //  }
}