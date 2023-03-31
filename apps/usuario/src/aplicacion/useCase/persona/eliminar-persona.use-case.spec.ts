import { Observable } from 'rxjs';
import { RegistrarPersonaoUseCase } from './registrar-persona.use-case';
import { PersonaSchema } from '../../../../src/infrastructura/dataBase/schema/persona.shema';
import { PersonaMongoService } from '../../../../src/infrastructura/dataBase/services/persona.service.mongo';
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { EditarPersonaoUseCase } from './editar-persona.use-case';
import { Types } from 'mongoose';
import { EliminarPersonaoUseCase } from './eliminar-persona.use-case';

describe('EliminarPersonaoUseCase', () => {
  let useCase: EliminarPersonaoUseCase;
  let service: PersonaMongoService;

  beforeEach(() => {
    service = {
        eliminar: jest.fn(),
    } as any as  PersonaMongoService;
    useCase = new EliminarPersonaoUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.eliminar', (done) => {
    // Arrange
    const _id = new Types.ObjectId("6425e193cc50b70709e09bfe");

    const mockData: boolean = true;
    const expectedData : boolean = true;

    const expectedInstanceType = Observable<boolean>;
    const stubEliminar = jest.fn(() =>
        new Observable<boolean>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'eliminar').mockReturnValue(stubEliminar());

    // Act
    const result = useCase.execute(_id.toString());

    // Assert
    expect(service.eliminar).toHaveBeenCalledWith(_id.toString());
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
