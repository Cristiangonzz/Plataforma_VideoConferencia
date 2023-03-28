import { Test, TestingModule } from '@nestjs/testing';
import { PersonaController } from './persona.controller';
import { PersonaService } from '../service/persona.service';
import { RegistrarPersonaDto } from '../dto/registrar-persona.dto';
import { PersonaSchema } from '../dataBase/schema/persona.shema';
import { of } from 'rxjs';
import { PersonaRegistradaPublisher } from '../messanging/publisher/persona/persona-registrado.publisher';
import { RegistrarPersonaoUseCase } from '../../aplicacion/useCase/persona/registrar-persona.use-case';
import { PersonaBuscadaPublisher } from '../messanging/publisher/persona/persona-buscada.oublisher';


describe('PersonaController', () => {
  let personaController: PersonaController;
  let personaService: PersonaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonaController],
      providers: [
        {
          provide: PersonaService,
          useValue: {
            registar: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
        {
            provide: PersonaRegistradaPublisher,
            useValue: {
                publish: jest.fn(),
            },
        },
        {
            provide: PersonaBuscadaPublisher,
            useValue: {
                publish: jest.fn(),
            },
        },
      ],
    }).compile();


    personaService = app.get<PersonaService>(PersonaService);
    personaController = app.get<PersonaController>(PersonaController);
  });

//   it('should return "Hello World!"', () => {
//     // Arrange
//     const mockData = 'Hello World!';
//     const expected = 'Hello World!';
//     jest.spyOn(PersonaService, 'registar').mockReturnValue(mockData);
//     // Act
//     const result = appController.getHello();
//     // Assert
//     expect(result).toEqual(expected);
//     expect(PersonaService.getHello).toHaveBeenCalled();
//   });

});