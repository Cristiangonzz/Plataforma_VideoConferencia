import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { VideoConferenciaSchema } from '../schema/video-conferencia.schema';
import { VideoConferenciaRepository } from '../repository/video-conferencia.repositoy';

@Injectable()
export class VideoConferenciaMongoService
  implements IVideoConferenciaDomainService<VideoConferenciaSchema>
{
 
  constructor(private readonly videoConferenciaRepository: VideoConferenciaRepository) {}

    crearVideoConferencia(dato: VideoConferenciaSchema): Observable<VideoConferenciaSchema> {
        return this.videoConferenciaRepository.registar(dato);
    }
    // findOneBy(id: string): Observable<VideoConferenciaSchema> {
    //     return this.videoConferenciaRepository.findOneBy(id);
    // }
    // findAll(): Observable<VideoConferenciaSchema[]> {
    //     return this.videoConferenciaRepository.findAll();
    // }
    // ActualizarVideoConferencia(id: string, dato: VideoConferenciaSchema): Observable<VideoConferenciaSchema> {
    //    return this.videoConferenciaRepository.actualizar(id, dato);
    // }
    //  eliminarVideoConferencia(id: string): Observable<VideoConferenciaSchema> {
    //      return this.videoConferenciaRepository.eliminar(id);
    //  }

}
