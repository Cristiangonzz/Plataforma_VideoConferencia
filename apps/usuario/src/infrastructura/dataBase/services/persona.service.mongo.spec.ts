import { Test, TestingModule } from '@nestjs/testing';
import { PersonaMongoService } from './persona.service.mongo';
import { PersonaRepository } from '../repository/persona.repositoy';
import { PersonaSchema } from '../schema/persona.shema';
import { of } from 'rxjs';


describe('PersonaMongoService', () => {
  let personaMongoService: PersonaMongoService;
  let personaRepository: PersonaRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        PersonaMongoService,
        {
          provide: PersonaRepository,
          useValue: {
            registar: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();
    personaMongoService = app.get<PersonaMongoService>(PersonaMongoService);
    personaRepository = app.get<PersonaRepository>(PersonaRepository);
  });

  it('should to be defined', () => {
    expect(personaMongoService).toBeDefined();
  });


  it('FindOneBy tine que retornar "Observable<PersonaChema>"', () => {
    // Arrange

    const mockData = new PersonaSchema();
    mockData.nombre = "cristian";
    mockData.mail = "cris@gmail.com"
    mockData.clave = "123456";

    const expected = new PersonaSchema();
    expected.nombre = "cristian";
    expected.mail = "cris@gmail.com"
    expected.clave = "123456";


    jest.spyOn(personaRepository, 'findOneBy').mockReturnValue(of(mockData));

    // Act
    const result = personaMongoService.findOneBy(mockData.mail);

    // Assert
    expect(result).toEqual(of(expected));
    expect(personaRepository.registar).toHaveBeenCalled();
  });


  it('Registrar tiene que retornar "Observable<PersonaChema>"', () => {
    // Arrange

    const mockData = new PersonaSchema();
    mockData.nombre = "cristian";
    mockData.mail = "cris@gmail.com"
    mockData.clave = "123456";

    const expected = new PersonaSchema();
    expected.nombre = "cristian";
    expected.mail = "cris@gmail.com";
    expected.clave = "123456";


    jest.spyOn(personaRepository, 'registar').mockReturnValue(of(mockData));

    // Act
    const result = personaMongoService.registar(mockData);

    // Assert
    expect(result).toEqual(of(expected));
    expect(personaRepository.registar).toHaveBeenCalled();
  });
});