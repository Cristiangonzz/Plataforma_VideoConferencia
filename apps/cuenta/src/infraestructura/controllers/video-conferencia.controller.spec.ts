import { Test, TestingModule } from '@nestjs/testing';
import { Observable,lastValueFrom, of } from 'rxjs';
import { CrearAudioConferenciaUseCase } from '../../aplicacion/casoDeUso/audioConferencia/crear-audio-conferencia.use-case';
import { VideoConferenciaController } from './video-conferencia.controller';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { VideoConferenciaCreadaPublisher } from '../menssaging/publisher/video-conferencia/video-conferencia-creada.publisher';
import { CrearVideoConferenciaUseCase } from '../../aplicacion/casoDeUso/videoConferencia/crear-video-conferencia.use-case';
import { CrearVideoConferenciaDTO } from '../dto/crear-video-conferencia.dto';
import { VideoConferenciaSchema } from '../dataBase/schema/video-conferencia.schema';

describe('VideoConferenciaController', () => {

  let api: VideoConferenciaController;
  let servicio: VideoConferenciaService;
  let evento: VideoConferenciaCreadaPublisher;

  const _id = '641c65deff0153dd0f36bf5';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: VideoConferenciaService,
          useValue: {},
        },
        {
            provide: VideoConferenciaCreadaPublisher,
            useValue: {
                publisher : jest.fn()
            },
          },
      ],
      controllers: [VideoConferenciaController],
    }).compile();

    api = module.get<VideoConferenciaController>(VideoConferenciaController);
    servicio = module.get<VideoConferenciaService>(VideoConferenciaService);
    evento = module.get<VideoConferenciaCreadaPublisher>(VideoConferenciaCreadaPublisher);
  });


  it('should be defined', () => {
    expect(api).toBeDefined();
    expect(servicio).toBeDefined();
    expect(evento).toBeDefined();
  });

  describe('create', () => {
    it('debe crear una nueva VideoConferencia', async () => {
      // Arrange
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25hIjp7Il9pZCI6IjY0MjY1MWRmZDJjM2ZjOTVkOWRmYTFjZCIsIm5vbWJyZSI6ImNyaXN0aWFuIiwibWFpbCI6ImNyaXNnb256YWxlekBnbWlhbC5jb20iLCJjbGF2ZSI6IjU5OTQ0NzFhYmIwMTExMmFmY2MxODE1OWY2Y2M3NGI0ZjUxMWI5OTgwNmRhNTliM2NhZjVhOWMxNzNjYWNmYzUifSwiaWF0IjoxNjgwMjMzNDU4fQ.KNgjqLcMRJf4fp_ZUCCvMvYxVmFpxaYxJ88Zq5vs6JQ"
      const video:CrearVideoConferenciaDTO = {
            anfitrion:  "cris@gmail.com",
        }

      const mockaVideo : VideoConferenciaSchema = 
        {
            anfitrion:  "cris@gmail.com",
            participante: [""],
            chatVivo: true,
            grabacion : false,
            pizzarra : false,
            compartirArchivo : false,
            presentacion : false,
        
        };

      const expectedVideo:VideoConferenciaSchema = 
        {
            anfitrion:  "cris@gmail.com",
            participante: [""],
            chatVivo: true,
            grabacion : false,
            pizzarra : false,
            compartirArchivo : false,
            presentacion : false,
        };
      //Mockear el caso de uso y el publisher
     jest
      .spyOn(CrearVideoConferenciaUseCase.prototype, 'execute')
      .mockReturnValue(of(mockaVideo));

    jest.spyOn(evento, 'publisher').mockReturnValue(of(video.anfitrion));

    // Act

    const result = api.crearVideoConferencia(token,video);

    // Assert
    expect(await lastValueFrom(result) ).toEqual((expectedVideo));
     })
      });
  });


 