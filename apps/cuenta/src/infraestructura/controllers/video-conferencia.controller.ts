import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable, from, map, switchMap, tap } from "rxjs";
import { VideoConferenciaDomainEntity } from '../../dominio/model/entidades/video-conferencia.dominio.entidad';
import { BuscarVideoConferenciaDto } from '../dto/buscar-video-conferencia.dto';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { VideoConferenciaCreadaPublisher } from '../menssaging/publisher/video-conferencia/video-conferencia-creada.publisher';
import { VideoConferenciaBuscadaPublisher } from '../menssaging/publisher/video-conferencia/video-conferencia-buscada.publisher';
import { CrearVideoConferenciaDTO } from "../dto/crear-video-conferencia.dto";
import { CrearVideoConferenciaUseCase } from "../../aplicacion/casoDeUso/videoConferencia/crear-video-conferencia.use-case";
import { BuscarVideoConferenciaUseCase } from '../../aplicacion/casoDeUso/videoConferencia/buscar-video-conferencia.use-case';

@Controller('videoConferencia')
export class VideoConferenciaController {
    constructor(
        private readonly videoConferenciaService: VideoConferenciaService,
        private readonly videoConferenciaRegistradaPublisher : VideoConferenciaCreadaPublisher,
        private readonly videoConferenciaBuscadaPublisher: VideoConferenciaBuscadaPublisher ,
    ) {}

    @Post('crear')
     crearVideoConferencia(@Body() dato: CrearVideoConferenciaDTO):Observable<VideoConferenciaDomainEntity> {
        const caso  = new  CrearVideoConferenciaUseCase(this.videoConferenciaService);
       return this.videoConferenciaRegistradaPublisher.publisher(dato.anfitrion)
        .pipe(
            switchMap(
                value => {
                    return  caso.execute({anfitrion:value});
                }
            )
        )
        
      
        // return from(caso.execute(dato))
        // .pipe(
        //     tap((videoconferencia:CrearVideoConferenciaDTO) => {
        //         this.videoConferenciaRegistradaPublisher.publisher(videoconferencia.anfitrion);
        //     },
        //     (error:Error) => {
        //         console.log(error);
        //     }));
    }

     @Get('buscar')
     buscarVideoConferencia(@Body() id: BuscarVideoConferenciaDto ):Observable<VideoConferenciaDomainEntity>{
         const caso = new BuscarVideoConferenciaUseCase(this.videoConferenciaService);
        
         return caso.execute(id.id).pipe(tap((data: VideoConferenciaDomainEntity) =>{
             this.videoConferenciaBuscadaPublisher.publish(data);
         }));
     }
}