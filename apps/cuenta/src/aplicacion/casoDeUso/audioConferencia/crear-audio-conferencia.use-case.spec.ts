
import { Test, TestingModule } from "@nestjs/testing";

import { lastValueFrom, of } from 'rxjs';
import { AudioConferenciaMongoService } from "../../../../src/infraestructura/dataBase/services/audio-conferencia.service.mongo";
import { CrearAudioConferenciaUseCase } from "./crear-audio-conferencia.use-case";




describe('crearAudioConferenciaUseCase', () => {
    let crearAudioConferenciaUseCase: CrearAudioConferenciaUseCase;
    let audioConferenciaMongoService: AudioConferenciaMongoService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            CrearAudioConferenciaUseCase,
          {
            provide: AudioConferenciaMongoService,
            useValue: {
                crearAudioConferencia: jest.fn(),
    
            },
          },
        ],
      }).compile();

      crearAudioConferenciaUseCase = module.get<CrearAudioConferenciaUseCase>(CrearAudioConferenciaUseCase);
      audioConferenciaMongoService = module.get<AudioConferenciaMongoService>(AudioConferenciaMongoService);
      
    });
  
    it('should be defined', () => {
      expect(crearAudioConferenciaUseCase).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva audioConferencia', async () => {
          // Arrange
          const audio = {
            anfitrion: "cris@gmail.com",
            }

          const mockaAudio= 
            {
            _id: '641c70d41964e9445f593bcc',
            anfitrion : "cris@gmail.com",
            participantes: [""],
            audio: true,
            };

          const expectedAudio = {
            _id: '641c70d41964e9445f593bcc',
            anfitrion : "cris@gmail.com",
            participantes: [""],
            audio: true,
          };
          
          jest.spyOn(audioConferenciaMongoService, 'crearAudioConferencia').mockReturnValue(of(mockaAudio));
    
          // Act
          const result = crearAudioConferenciaUseCase.execute(audio);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedAudio);
        });
      });
    
    });