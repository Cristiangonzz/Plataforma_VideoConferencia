
import { of ,Observable} from 'rxjs';
import { IEmpresaDomainService } from './empresa.domain.service';
import { EmpresaDomainEntity } from '../model/empresa.model';

describe('IEmpresaDomainService', () => {
  let empresaDomainService: IEmpresaDomainService;

  beforeEach(() => {
    empresaDomainService = {
      registar: jest.fn(),
      findOneBy: jest.fn(),
    };
  });

  describe('registar', () => {
    it('should call registar method', () => {
      const empresa: EmpresaDomainEntity = 
    { 
        nombre: "uruguay",
        mail: "uru@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),
        cantidadEmpleado: 1,
        rut: 123,
        rubro: "deporte"
    
    };
      empresaDomainService.registar(empresa);
      expect(empresaDomainService.registar).toHaveBeenCalledWith(empresa);
    });

    it('should return an Observable of type T', () => {
      const empresa: EmpresaDomainEntity =
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte"
        };
      const mockReturnValue: EmpresaDomainEntity = 
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte" 
        };
      (empresaDomainService.registar as jest.Mock).mockReturnValue(of(mockReturnValue));
      const result = empresaDomainService.registar(empresa);
      expect(result).toBeInstanceOf(Observable);
      result.subscribe((value) => expect(value).toEqual(mockReturnValue));
    });
  });

   describe('findOneBy', () => {
     it('should call findOneBy method', () => {
       const mail = 'uru@gmail.com';
       empresaDomainService.findOneBy(mail);
       expect(empresaDomainService.findOneBy).toHaveBeenCalledWith(mail);
        });
    });

     it('should return an Observable of type T', () => {
       const mail = 'uru@gmail.com';
       const mockReturnValue: EmpresaDomainEntity = 
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte"
        };
       (empresaDomainService.findOneBy as jest.Mock).mockReturnValue(of(mockReturnValue));
       const result = empresaDomainService.findOneBy(mail);
       expect(result).toBeInstanceOf(Observable);
       result.subscribe((value) => expect(value).toEqual(mockReturnValue));
     });
   });
