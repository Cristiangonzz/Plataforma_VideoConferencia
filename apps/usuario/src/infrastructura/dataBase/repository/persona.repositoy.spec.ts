import { Model } from "mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { lastValueFrom } from 'rxjs';

import { PersonaRepository } from "./persona.repositoy";
import { PersonaSchema } from "../schema/persona.shema";






describe('PersonaRepository', () => {
    let personaRepository: PersonaRepository;
    let personaModel: Model<PersonaSchema>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            PersonaRepository,
          {
            provide: getModelToken(PersonaSchema.name),
            useValue: {
                create: jest.fn(),
                findOne: jest.fn(),
            },
          },
        ],
      }).compile();

      personaRepository = module.get<PersonaRepository>(PersonaRepository);
      personaModel = module.get<Model<PersonaSchema>>(getModelToken(PersonaSchema.name));
      
    });
  
    it('should be defined', () => {
      expect(PersonaRepository).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva Persona', async () => {
          // Arrange
          const persona = {
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
          
           // setPassword: jest.fn(),
            setPassword: expect.any(Function),
            }

          const mockUsuario = 
            {
            _id: '641c70d41964e9445f593bcc',
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
            };
          const expectedUsuario = {
            _id: '641c70d41964e9445f593bcc',
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
          };
          jest.spyOn(personaModel, 'create').mockResolvedValue(mockUsuario as any);
    
          // Act
          const result = personaRepository.registar(persona);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedUsuario);
        });
      });

      describe('findOneBy', () => {
        it('Debe retornar una Persona', (done) => {
          // Arrange
          const persona = "cris@gmail.com";

          const mockUsuario = new PersonaSchema(
            {
            
                nombre: "cristian",
                mail: "cris@gmail.com",
                clave: "123",
             },
            
          );
          const expectedUsuario = {
            nombre: "cristian",
            mail: "cris@gmail.com",
            clave: "123",
          };

          jest.spyOn(personaModel, 'findOne').mockReturnValue(mockUsuario as any);

          // Act
          const result = personaRepository.findOneBy(persona);
    
          // Assert
          result.subscribe({
            next: (persona) =>  expect(persona).toEqual(expectedUsuario),
            complete: () => {
              done();
            },
          });
        });
      })
    
    });
