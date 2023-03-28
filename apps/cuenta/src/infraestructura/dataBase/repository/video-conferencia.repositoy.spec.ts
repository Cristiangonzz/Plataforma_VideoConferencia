import { Model } from "mongoose";
import { VideoConferenciaRepository } from "./video-conferencia.repositoy";
import { VideoConferenciaSchema } from "../schema/video-conferencia.schema";
import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { lastValueFrom } from 'rxjs';




describe('VideoConferenciaRepository', () => {
    let videoConferenciaRepository: VideoConferenciaRepository;
    let videoConferenciaModel: Model<VideoConferenciaSchema>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            VideoConferenciaRepository,
          {
            provide: getModelToken(VideoConferenciaSchema.name),
            useValue: {
                create: jest.fn(),
                findOneBy: jest.fn(),
            },
          },
        ],
      }).compile();

      videoConferenciaRepository = module.get<VideoConferenciaRepository>(VideoConferenciaRepository);
      videoConferenciaModel = module.get<Model<VideoConferenciaSchema>>(getModelToken(VideoConferenciaSchema.name));
      
    });
  
    it('should be defined', () => {
      expect(videoConferenciaRepository).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva VideoConferencia', async () => {
          // Arrange
          const videoConferencia = {
            anfitrion : "cris@gmail.com",
            participante: ["e","q"],
            chatVivo: true,
            grabacion: false,
            pizzarra: false,
            compartirArchivo:false ,
            presentacion: false,
            }

          const mockUsuario = 
            {
            _id: '641c70d41964e9445f593bcc', anfitrion : "cris@gmail.com",
            participante: [""],
            chatVivo: true,
            grabacion: false,
            pizzarra: false,
            compartirArchivo:false ,
            presentacion: false, 
            };
          const expectedUsuario = {
            _id: '641c70d41964e9445f593bcc',
            participante: [""],
            chatVivo: true,
            grabacion: false,
            pizzarra: false,
            compartirArchivo:false ,
            presentacion: false, 
          };
          jest.spyOn(videoConferenciaModel, 'create').mockResolvedValue(mockUsuario as any);
    
          // Act
          const result = videoConferenciaRepository.registar(videoConferencia);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedUsuario);
        });
      });
    
    });
