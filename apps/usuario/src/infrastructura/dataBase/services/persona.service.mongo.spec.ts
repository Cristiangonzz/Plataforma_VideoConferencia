import { Test, TestingModule } from '@nestjs/testing';
import { PersonaMongoService } from './persona.service.mongo';
import { PersonaRepository } from '../repository/persona.repositoy';
import { PersonaSchema } from '../schema/persona.shema';
import { lastValueFrom, of } from 'rxjs';


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


  describe('findOneBy', () => {
    it('Debe de retornar una empresa', (done) => {
      // Arrange


    const persona = "cristian@gmail.com"
    
    const mockData =(
      {
        _id : "abc1234",
        nombre : "cristian",
        mail : "cris@gmail.com",
        clave : "123456"
      }
    );
  

    const expected =(
      {
        _id : "abc1234",
        nombre : "cristian",
        mail : "cris@gmail.com",
        clave : "123456"
      }
    );
      jest.spyOn(personaRepository, 'findOneBy').mockReturnValue(of(mockData) as any);

      // Act
      const result = personaMongoService.findOneBy(persona);

      // Assert

      result.subscribe({
        next: (persona) => expect(persona).toEqual(expected),
        complete: () => { 
          done();
        },
      });
    });
  });

  it('Registrar tiene que retornar "Observable<PersonaChema>"', async () =>  {
    // Arrange

    const persona : PersonaSchema=(
      {
        nombre : "cristian",
        mail : "cris@gmail.com",
        clave : "123456",
        setPassword: expect.any(Function)
      }
    );

    const mockData =(
      {
        _id : "abc1234",
        nombre : "cristian",
        mail : "cris@gmail.com",
        clave : "123456"
      }
    );
  

    const expected =(
      {
        _id : "abc1234",
        nombre : "cristian",
        mail : "cris@gmail.com",
        clave : "123456"
      }
    );
   


    jest.spyOn(personaRepository, 'registar').mockReturnValue(of(mockData) as any);

    // Act
    const result = personaMongoService.registar(persona);

    // Assert
    expect(await lastValueFrom(result)).toEqual(expected);
    expect(personaRepository.registar).toHaveBeenCalled();
  });
});