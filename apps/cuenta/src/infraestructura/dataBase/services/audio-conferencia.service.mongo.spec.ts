import { Test, TestingModule } from "@nestjs/testing";
import { lastValueFrom, of } from 'rxjs';

import { AudioConferenciaMongoService } from "./audio-conferencia.service.mongo";
import { AudioConferenciaRepository } from "../repository/audio-conferencia.repositoy";
import { AudioConferenciaSchema } from '../schema/audio-conferencia.schema';




describe('AudioConferenciaMongoService', () => {
    let audioConferenciaMongoService: AudioConferenciaMongoService;
    let audioConferenciaRepository: AudioConferenciaRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          AudioConferenciaMongoService,
          {
            provide: AudioConferenciaRepository,
            useValue: {
              registar: jest.fn(),
            },
          },
        ],
      }).compile();

      audioConferenciaMongoService = module.get<AudioConferenciaMongoService>(AudioConferenciaMongoService);
      audioConferenciaRepository = module.get<AudioConferenciaRepository>(AudioConferenciaRepository);
      
    });
  
    it('should be defined', () => {
      expect(audioConferenciaMongoService).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva audioConferencia', async () => {
          // Arrange
          const audio : AudioConferenciaSchema= {
            anfitrion: "cris@gmail.com",
            participantes: ["a"],
            audio: true,
            }

          const mockaAudio = 
            {
            anfitrion : "cris@gmail.com",
            participantes: ["a"],
            audio: true,
            };

          const expectedAudio = {
            anfitrion : "cris@gmail.com",
            participantes: ["a"],
            audio: true,
          };
          
          jest.spyOn(audioConferenciaRepository, 'registar').mockReturnValue(of(mockaAudio));
    
          // Act
          const result = audioConferenciaRepository.registar(audio);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedAudio);
        });
      });
    
    });