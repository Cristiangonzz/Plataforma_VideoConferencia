import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IAudioConferenciaDomainService } from '../../../dominio/services/audio-conferencia.service';
import { AudioConferenciaSchema } from '../schema/audio-conferencia.schema';
import { AudioConferenciaRepository } from '../repository/audio-conferencia.repositoy';

@Injectable()
export class AudioConferenciaMongoService
  implements IAudioConferenciaDomainService<AudioConferenciaSchema>
{
 
  constructor(private readonly audioConferenciaRepository: AudioConferenciaRepository) {}

    crearAudioConferencia(dato: AudioConferenciaSchema): Observable<AudioConferenciaSchema> {
        return this.audioConferenciaRepository.registar(dato);
    }
    // findAll(): Observable<AudioConferenciaSchema[]> {
    //     return this.audioConferenciaRepository.findAll();
    // }
    // findOneBy(id: string): Observable<AudioConferenciaSchema> {
    //     return this.audioConferenciaRepository.findOneBy(id);
    // }
    // ActualizarAudioConferencia(id: string, dato: AudioConferenciaSchema): Observable<AudioConferenciaSchema> {
    //    return this.audioConferenciaRepository.actualizar(id, dato);
    // }
    // eliminarAudioConferencia(id: string): Observable<AudioConferenciaSchema> {
    //     return this.audioConferenciaRepository.eliminar(id);
    // }

}
