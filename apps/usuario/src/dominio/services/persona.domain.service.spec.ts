
import { of ,Observable} from 'rxjs';
import { IPersonaDomainService } from './persona.domain.service';
import { PersonaDomainEntity } from '../model/persona';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';


describe('IPersonaDomainService', () => {
  let personaDomainService: IPersonaDomainService;

  beforeEach(() => {
    personaDomainService = {
      registar: jest.fn(),
      findOneBy: jest.fn(),
      actualizar: jest.fn(),
      eliminar: jest.fn(),
    };
  });

  describe('registar', () => {
    it('should call registar method', () => {
      const persona: PersonaDomainEntity = 
    { 
        nombre: "uruguay",
        mail: "uru@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),
    
    
    };
      personaDomainService.registar(persona);
      expect(personaDomainService.registar).toHaveBeenCalledWith(persona);
    });

    it('should return an Observable of type T', () => {
      const persona: PersonaDomainEntity =
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),
            
        };
      const mockReturnValue: PersonaDomainEntity = 
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),
            
        };
      (personaDomainService.registar as jest.Mock).mockReturnValue(of(mockReturnValue));
      const result = personaDomainService.registar(persona);
      expect(result).toBeInstanceOf(Observable);
      result.subscribe((value) => expect(value).toEqual(mockReturnValue));
    });
  });

   describe('findOneBy', () => {
     it('should call findOneBy method', () => {
       const mail = 'uru@gmail.com';
       personaDomainService.findOneBy(mail);
       expect(personaDomainService.findOneBy).toHaveBeenCalledWith(mail);
        });
    });

     it('should return an Observable of type T', () => {
       const mail = 'uru@gmail.com';
       const mockReturnValue: PersonaDomainEntity = 
        { 
            nombre: "uruguay",
            mail: "uru@gmail.com",
            clave: "123",
            setPassword: expect.any(Function),

        };
       (personaDomainService.findOneBy as jest.Mock).mockReturnValue(of(mockReturnValue));
       const result = personaDomainService.findOneBy(mail);
       expect(result).toBeInstanceOf(Observable);
       result.subscribe((value) => expect(value).toEqual(mockReturnValue));
     });

      
     describe('Editar', () => {
      it('should call Editar method', () => {
        const _id = new Types.ObjectId("641f1e79398d97022720784b");
        const persona : PersonaDomainEntity = 
      { 
    
          nombre: "uruguay",
          mail: "uru@gmail.com",
          clave: "123",
          setPassword: expect.any(Function),
      
      
      };
        personaDomainService.actualizar(_id.toString(),persona);
        expect(personaDomainService.actualizar).toHaveBeenCalledWith(_id.toString(),persona);
      
      });
  
      it('should return an Observable of type T', () => {
        const _id = new Types.ObjectId("641f1e79398d97022720784b");
        const persona: PersonaDomainEntity =
          { 
              nombre: "uruguay",
              mail: "uru@gmail.com",
              clave: "123",
              setPassword: expect.any(Function),
              
          };
        const mockReturnValue: PersonaDomainEntity = 
          { 
              nombre: "uruguay",
              mail: "uru@gmail.com",
              clave: "123",
              setPassword: expect.any(Function),
              
          };
        (personaDomainService.actualizar as jest.Mock).mockReturnValue(of(mockReturnValue));
        const result = personaDomainService.actualizar(_id.toString(),persona);
        expect(result).toBeInstanceOf(Observable);
        result.subscribe((value) => expect(value).toEqual(mockReturnValue));
      });
    });
  



    describe('Eliminar', () => {
      it('should call Eliminar method', () => {
        const _id = new Types.ObjectId("641f1e79398d97022720784b");
      
        personaDomainService.eliminar(_id.toString());
        expect(personaDomainService.eliminar).toHaveBeenCalledWith(_id.toString());
      
      });
  
      it('should return an Observable of type T', () => {
        const _id = new Types.ObjectId("641f1e79398d97022720784b");
        const mock: boolean = true;
       
        (personaDomainService.eliminar as jest.Mock).mockReturnValue(of(mock));
        const result = personaDomainService.eliminar(_id.toString());

        expect(result).toBeInstanceOf(Observable);
        result.subscribe((value) => expect(value).toEqual(mock));
      });
    });
   });