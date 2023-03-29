import { Test, TestingModule } from "@nestjs/testing";
import { lastValueFrom, of } from 'rxjs';

import { VideoConferenciaSchema } from "../schema/video-conferencia.schema";
import { VideoConferenciaRepository } from "../repository/video-conferencia.repositoy";
import { VideoConferenciaMongoService } from "./video-conferencia.service.mongo";




describe('VideoConferenciaMongoService', () => {
    let videoConferenciaMongoService: VideoConferenciaMongoService;
    let videoConferenciaRepository: VideoConferenciaRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          VideoConferenciaMongoService,
          {
            provide: VideoConferenciaRepository,
            useValue: {
              registar: jest.fn(),
            },
          },
        ],
      }).compile();

      videoConferenciaMongoService = module.get<VideoConferenciaMongoService>(VideoConferenciaMongoService);
      videoConferenciaRepository = module.get<VideoConferenciaRepository>(VideoConferenciaRepository);
      
    });
  
    it('should be defined', () => {
      expect(VideoConferenciaMongoService).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva VideoConferencia', async () => {
          // Arrange
          const video : VideoConferenciaSchema= {
            anfitrion:"cristian@gmail.com",       
            participante: ["a"],
            chatVivo: true,
            grabacion:false,
            pizzarra:false,
            compartirArchivo:false,
            presentacion:false
            }

          const mockaVideo:VideoConferenciaSchema = 
            {
                anfitrion:"cristian@gmail.com",       
                participante: ["a"],
                chatVivo: true,
                grabacion:false,
                pizzarra:false,
                compartirArchivo:false,
                presentacion:false
            };

          const expectedVideo = {
            anfitrion:"cristian@gmail.com",       
            participante: ["a"],
            chatVivo: true,
            grabacion:false,
            pizzarra:false,
            compartirArchivo:false,
            presentacion:false
          };
          
          jest.spyOn(videoConferenciaRepository, 'registar').mockReturnValue(of(mockaVideo));
    
          // Act
          const result = videoConferenciaMongoService.crearVideoConferencia(video);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedVideo);
        });
      });
    
    });