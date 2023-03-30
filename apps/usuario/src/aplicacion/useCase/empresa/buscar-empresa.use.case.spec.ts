import { Observable } from 'rxjs';
import { EmpresaMongoService } from '../../../../src/infrastructura/dataBase/services/empresa.service.mongo';
import { EmpresaSchema } from '../../../../src/infrastructura/dataBase/schema/empresa.shema';
import { BuscarEmpresaUseCase } from './buscar-empresa.use.case';

describe('BuscarEmpresaUseCase', () => {
  let useCase: BuscarEmpresaUseCase;
  let service: EmpresaMongoService;

  beforeEach(() => {
    service = {
        findOneBy: jest.fn(),
    } as any as  EmpresaMongoService;
    useCase = new BuscarEmpresaUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  it('llamar a service.registrar', (done) => {
    // Arrange
    const _id = '641c65deff0153dd0f36bf5';
    const payload = 
    { 
        mail: "cris@gmail.com",
    };
    const mockData = 
    { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),

        cantidadEmpleado: 1,
        rut: 123,
        rubro: "deporte", 
    };
    const expectedData = 
    {
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
        setPassword: expect.any(Function),

        cantidadEmpleado: 1,
        rut: 123,
        rubro: "deporte", 
    };
    const expectedInstanceType = Observable<EmpresaSchema>;
    const stubRegistrar = jest.fn(() =>
        new Observable<EmpresaSchema>((subscriber) => {
          subscriber.next(mockData);
          subscriber.complete();
        }),
    );
    jest.spyOn(service, 'findOneBy').mockReturnValue(stubRegistrar());

    // Act
    const result = useCase.execute(payload);

    // Assert
    expect(service.findOneBy).toHaveBeenCalledWith(mockData);
    expect(result).toBeInstanceOf(expectedInstanceType);
    result.subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      },
      complete: () => done(),
    });
  });
});
