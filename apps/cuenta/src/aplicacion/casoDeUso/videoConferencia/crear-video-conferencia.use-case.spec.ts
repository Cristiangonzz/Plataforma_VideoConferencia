import { AudioConferenciaSchema } from '../../../../src/infraestructura/dataBase/schema/audio-conferencia.schema';
import { VideoConferenciaMongoService } from '../../../../src/infraestructura/dataBase/services/video-conferencia.service.mongo';
import { Observable } from 'rxjs';
import { CrearAudioConferenciaUseCase } from '../audioConferencia/crear-audio-conferencia.use-case';
import { CrearVideoConferenciaUseCase } from './crear-video-conferencia.use-case';
import { VideoConferenciaSchema } from '../../../../src/infraestructura/dataBase/schema/video-conferencia.schema';


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
    const payload = 
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
    const expectedData = 
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




// describe('CrearVideoConferenciaUseCase', () => {
//     let crearVideoConferenciaUseCase: CrearVideoConferenciaUseCase;
//     let videoConferenciaService: VideoConferenciaMongoService;
  
//     beforeEach(async () => {
//       const module: TestingModule = await Test.createTestingModule({
//         providers: [
//             CrearVideoConferenciaUseCase,
//           {
//             provide: VideoConferenciaMongoService,
//             useValue: {
//                 crearVideoConferencia: jest.fn(),
                
//             },
//           },
//         ],
//       }).compile();

//       crearVideoConferenciaUseCase = module.get<CrearVideoConferenciaUseCase>(CrearVideoConferenciaUseCase);
//       videoConferenciaService = module.get<VideoConferenciaMongoService>(VideoConferenciaMongoService);
      
//     });
  
//     it('should be defined', () => {
//       expect(crearVideoConferenciaUseCase).toBeDefined();
//     });
  
//     describe('create', () => {
//         it('debe crear una nueva VideoConferencia', async () => {

//           // Arrange
//           const videoConferencia:IVideoConferencia = 
//             {
//                 anfitrion : "cris@gmail.com",
//             }

//           const mockUsuario = 
//             {
//                 _id: '641c70d41964e9445f593bcc',
//                 anfitrion : "cris@gmail.com",
//                 participante: [""],
//                 chatVivo: true,
//                 grabacion: false,
//                 pizzarra: false,
//                 compartirArchivo:false ,
//                 presentacion: false, 
//             };
//           const expectedUsuario = 
//             {
//                 _id: '641c70d41964e9445f593bcc',
//                 anfitrion : "cris@gmail.com",
//                 participante: [""],
//                 chatVivo: true,
//                 grabacion: false,
//                 pizzarra: false,
//                 compartirArchivo:false ,
//                 presentacion: false, 
//             };

//           jest.spyOn(videoConferenciaService, 'crearVideoConferencia').mockReturnValue(of(mockUsuario) as any);
    
//           // Act
//           const result = crearVideoConferenciaUseCase.execute(videoConferencia);
    
//           // Assert
//           expect(await lastValueFrom(result)).toEqual(expectedUsuario);
//         });
//       });
    
//     });