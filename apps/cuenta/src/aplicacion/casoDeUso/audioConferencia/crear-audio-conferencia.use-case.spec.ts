import { Observable } from 'rxjs';

import { CrearAudioConferenciaUseCase } from './crear-audio-conferencia.use-case';
import { AudioConferenciaSchema } from '../../../../src/infraestructura/dataBase/schema/audio-conferencia.schema';
import { AudioConferenciaMongoService } from '../../../../src/infraestructura/dataBase/services/audio-conferencia.service.mongo';
import { AudioConferenciaDomainEntity } from '../../../dominio/model/entidades/audio-conferencia.dominio.entidad';

describe('CrearAudioConferenciaUseCase', () => {
  let useCase: CrearAudioConferenciaUseCase;
  let service: AudioConferenciaMongoService;

  beforeEach(() => {
    service = {
      crearAudioConferencia: jest.fn(),
    } as any as  AudioConferenciaMongoService;
    useCase = new CrearAudioConferenciaUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.registrar', (done) => {
    // Arrange
    const _id = '641c65deff0153dd0f36bf5';
    const payload: AudioConferenciaDomainEntity = 
    { 
      anfitrion: "cris@gmail.com",
      participantes:[""],
      audio:true, 
    };
    const mockData:AudioConferenciaSchema = 
    { 
      anfitrion: "cris@gmail.com",
      participantes:[""],
      audio:true,  
    };
    const expectedData:AudioConferenciaDomainEntity = 
    {
      anfitrion: "cris@gmail.com",
      participantes:[""],
      audio:true,  
    };
    const expectedInstanceType = Observable<AudioConferenciaSchema>;
    const stubCrear = jest.fn(() =>
        new Observable<AudioConferenciaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'crearAudioConferencia').mockReturnValue(stubCrear());

    // Act
    const result = useCase.execute(payload);

    // Assert
    expect(service.crearAudioConferencia).toHaveBeenCalledWith(mockData);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
