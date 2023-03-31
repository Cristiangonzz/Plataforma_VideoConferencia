import { Observable } from 'rxjs';
import { RegistrarPersonaoUseCase } from './registrar-persona.use-case';
import { PersonaSchema } from '../../../../src/infrastructura/dataBase/schema/persona.shema';
import { PersonaMongoService } from '../../../../src/infrastructura/dataBase/services/persona.service.mongo';
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { EditarPersonaoUseCase } from './editar-persona.use-case';
import { Types } from 'mongoose';

describe('EditarPersonaoUseCase', () => {
  let useCase: EditarPersonaoUseCase;
  let service: PersonaMongoService;

  beforeEach(() => {
    service = {
        actualizar: jest.fn(),
    } as any as  PersonaMongoService;
    useCase = new EditarPersonaoUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.actualizar', (done) => {
    // Arrange
    const _id = new Types.ObjectId("6425e193cc50b70709e09bfe");
    const payload: PersonaDomainEntity = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "", 
        setPassword: expect.any(Function),
    };
    const mockData: PersonaDomainEntity = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),
    };
    const expectedData : PersonaDomainEntity = 
    {
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),
    };
    const expectedInstanceType = Observable<PersonaSchema>;
    const stubActualizar = jest.fn(() =>
        new Observable<PersonaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'actualizar').mockReturnValue(stubActualizar());

    // Act
    const result = useCase.execute(_id.toString(), payload);

    // Assert
    expect(service.actualizar).toHaveBeenCalledWith(_id.toString(),mockData);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
