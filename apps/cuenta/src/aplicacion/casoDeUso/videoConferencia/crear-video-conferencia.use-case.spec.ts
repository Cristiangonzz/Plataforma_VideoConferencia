import { VideoConferenciaMongoService } from '../../../../src/infraestructura/dataBase/services/video-conferencia.service.mongo';
import { Observable } from 'rxjs';
import { CrearAudioConferenciaUseCase } from '../audioConferencia/crear-audio-conferencia.use-case';
import { CrearVideoConferenciaUseCase } from './crear-video-conferencia.use-case';
import { VideoConferenciaSchema } from '../../../../src/infraestructura/dataBase/schema/video-conferencia.schema';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';


describe('CrearVideoConferenciaUseCase', () => {
  let useCase: CrearVideoConferenciaUseCase;
  let service: VideoConferenciaMongoService;

  beforeEach(() => {
    service = {
      crearVideoConferencia: jest.fn(),
    } as any as  VideoConferenciaMongoService;
    useCase = new CrearVideoConferenciaUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.registrar', (done) => {
    // Arrange
    const _id = '641c65deff0153dd0f36bf5';
    const payload : VideoConferenciaDomainEntity= 
    { 
      anfitrion: "cris@gmail.com",
      participante:[""],
      chatVivo: true,
      grabacion: false,
      pizzarra: false,
      compartirArchivo: false,
      presentacion: false 
    };
    const mockData : VideoConferenciaSchema = 
    { 
      anfitrion: "cris@gmail.com",
      participante:[""],
      chatVivo: true,
      grabacion: false,
      pizzarra: false,
      compartirArchivo: false,
      presentacion: false  
    };
    const expectedData :VideoConferenciaDomainEntity= 
    {
      anfitrion: "cris@gmail.com",
      participante:[""],
      chatVivo: true,
      grabacion: false,
      pizzarra: false,
      compartirArchivo: false,
      presentacion: false 
    };
    const expectedInstanceType = Observable<VideoConferenciaSchema>;
    const stubCrear = jest.fn(() =>
        new Observable<VideoConferenciaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'crearVideoConferencia').mockReturnValue(stubCrear());

    // Act
    const result = useCase.execute(payload);

    // Assert
    expect(service.crearVideoConferencia).toHaveBeenCalledWith(mockData);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});