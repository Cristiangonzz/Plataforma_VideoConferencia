import { Model } from "mongoose";

import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { lastValueFrom } from 'rxjs';
import { AudioConferenciaRepository } from "./audio-conferencia.repositoy";
import { AudioConferenciaSchema } from "../schema/audio-conferencia.schema";




describe('AudioConferenciaRepository', () => {
    let audioConferenciaRepository: AudioConferenciaRepository;
    let audioConferenciaModel: Model<AudioConferenciaSchema>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            AudioConferenciaRepository,
          {
            provide: getModelToken(AudioConferenciaSchema.name),
            useValue: {
                create: jest.fn(),
                findOneBy: jest.fn(),
            },
          },
        ],
      }).compile();

      audioConferenciaRepository = module.get<AudioConferenciaRepository>(AudioConferenciaRepository);
      audioConferenciaModel = module.get<Model<AudioConferenciaSchema>>(getModelToken(AudioConferenciaSchema.name));
      
    });
  
    it('should be defined', () => {
      expect(audioConferenciaRepository).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva audioConferencia', async () => {
          // Arrange
          const audio = {
            anfitrion: "cris@gmail.com",
            participantes: ["a"],
            audio: true,
            }

          const mockaAudio = 
            {
            _id: '641c70d41964e9445f593bcc',
            anfitrion : "cris@gmail.com",
            participantes: ["a"],
            audio: true,
            };

          const expectedAudio = {
            _id: '641c70d41964e9445f593bcc',
            anfitrion : "cris@gmail.com",
            participantes: ["a"],
            audio: true,
          };
          
          jest.spyOn(audioConferenciaModel, 'create').mockResolvedValue(mockaAudio as any );
    
          // Act
          const result = audioConferenciaRepository.registar(audio);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedAudio);
        });
      });
    
    });