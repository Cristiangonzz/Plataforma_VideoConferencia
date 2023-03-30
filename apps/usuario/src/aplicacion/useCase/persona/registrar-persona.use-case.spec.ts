import { Observable } from 'rxjs';
import { RegistrarPersonaoUseCase } from './registrar-persona.use-case';
import { PersonaSchema } from '../../../../src/infrastructura/dataBase/schema/persona.shema';
import { PersonaMongoService } from '../../../../src/infrastructura/dataBase/services/persona.service.mongo';

describe('RegistrarPersonaoUseCase', () => {
  let useCase: RegistrarPersonaoUseCase;
  let service: PersonaMongoService;

  beforeEach(() => {
    service = {
        registar: jest.fn(),
    } as any as  PersonaMongoService;
    useCase = new RegistrarPersonaoUseCase(service);
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
        clave: "", 
    };
    const mockData = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),
    };
    const expectedData = 
    {
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),
    };
    const expectedInstanceType = Observable<PersonaSchema>;
    const stubRegistrar = jest.fn(() =>
        new Observable<PersonaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'registar').mockReturnValue(stubRegistrar());

    // Act
    const result = useCase.execute(payload);

    // Assert
    expect(service.registar).toHaveBeenCalledWith(mockData);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
