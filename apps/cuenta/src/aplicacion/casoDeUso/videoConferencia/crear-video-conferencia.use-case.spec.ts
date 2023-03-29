
import { of } from 'rxjs';

import { IVideoConferencia } from '../../../dominio/model/interfaces/video-conferencia.dominio.interfaces';
import { IVideoConferenciaDomainService } from '../../../dominio/services/video-conferencia.service';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';
import { CrearVideoConferenciaUseCase } from './crear-video-conferencia.use-case';

describe('CrearVideoConferenciaUseCase', () => {
  let useCase: CrearVideoConferenciaUseCase;
  let videoConferenciaService: IVideoConferenciaDomainService<VideoConferenciaDomainEntity>;

  beforeEach(() => {
    videoConferenciaService  = jasmine.createSpyObj('IVideoConferenciaDomainService', ['crearVideoConferencia']);
    useCase = new CrearVideoConferenciaUseCase(videoConferenciaService);
  });

  it('should create a new video conferencia', () => {
    // Arrange
    const dato: IVideoConferencia = { anfitrion: 'Anfitrion name' };
    const newVideoConferencia = new VideoConferenciaDomainEntity();
    newVideoConferencia.anfitrion = dato.anfitrion;
    newVideoConferencia.participante = [""];
    newVideoConferencia.chatVivo = true;
    newVideoConferencia.grabacion = false;
    newVideoConferencia.pizzarra = false;
    newVideoConferencia.compartirArchivo = false;
    newVideoConferencia.presentacion = false;

    videoConferenciaService.crearVideoConferencia.and.returnValue(of(newVideoConferencia));

    // Act
    const result$ = useCase.execute(dato);

    // Assert
    result$.subscribe((result) => {
      expect(videoConferenciaService.crearVideoConferencia).toHaveBeenCalledWith(newVideoConferencia);
      expect(result).toEqual(newVideoConferencia);
    });
  });
});
// import { Test, TestingModule } from "@nestjs/testing";
// import { lastValueFrom, of } from 'rxjs';
// import { CrearVideoConferenciaUseCase } from "./crear-video-conferencia.use-case";
// import { VideoConferenciaMongoService } from "../../../../src/infraestructura/dataBase/services/video-conferencia.service.mongo";
// import { IVideoConferencia } from "../../../../src/dominio/model/interfaces/video-conferencia.dominio.interfaces";






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