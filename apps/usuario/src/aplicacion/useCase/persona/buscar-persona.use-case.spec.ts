import { Observable } from 'rxjs';
import { BuscarPersonaUseCase } from './buscar-persona.use-case';
import { PersonaMongoService } from '../../../../src/infrastructura/dataBase/services/persona.service.mongo';
import { PersonaSchema } from '../../../../src/infrastructura/dataBase/schema/persona.shema';

describe('BuscarPersonaUseCase', () => {
  let useCase: BuscarPersonaUseCase;
  let service: PersonaMongoService;

  beforeEach(() => {
    service = {
        findOneBy: jest.fn(),
    } as any as  PersonaMongoService;
    useCase = new BuscarPersonaUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.registrar', (done) => {
    // Arrange
    const _id = '641c65deff0153dd0f36bf5';
    const payload = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),
        
    };
    const mockData = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "123", 
        setPassword: expect.any(Function),
    };
    const expectedData = 
    {
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "123", 
        setPassword: expect.any(Function),
    };
    const expectedInstanceType = Observable<PersonaSchema>;
    const stubRegistrar = jest.fn(() =>
        new Observable<PersonaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'findOneBy').mockReturnValue(stubRegistrar());

    // Act
    const result = useCase.execute(payload.mail);

    // Assert
    expect(service.findOneBy).toHaveBeenCalledWith(mockData.mail);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
