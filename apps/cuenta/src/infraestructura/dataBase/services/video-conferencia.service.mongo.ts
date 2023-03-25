import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { videoConferenciaSchema } from '../schema/video-conferencia.schema';
import { VideoConferenciaRepository } from '../repository/video-conferencia.repositoy';

@Injectable()
export class VideoConferenciaMongoService
  implements IVideoConferenciaDomainService<videoConferenciaSchema>
{
 
  constructor(private readonly videoConferenciaRepository: VideoConferenciaRepository) {}

    registar(dato: videoConferenciaSchema): Observable<videoConferenciaSchema> {
        return this.videoConferenciaRepository.registar(dato);
    }
    findAll(): Observable<videoConferenciaSchema[]> {
        return this.videoConferenciaRepository.findAll();
    }
    findOneBy(id: string): Observable<videoConferenciaSchema> {
        return this.videoConferenciaRepository.findOneBy(id);
    }
    Actualizar(id: string, dato: videoConferenciaSchema): Observable<videoConferenciaSchema> {
       return this.videoConferenciaRepository.actualizar(id, dato);
    }
    eliminar(id: string): Observable<videoConferenciaSchema> {
        return this.videoConferenciaRepository.eliminar(id);
    }

}
