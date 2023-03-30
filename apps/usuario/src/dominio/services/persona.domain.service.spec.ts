
import { of ,Observable} from 'rxjs';
import { IPersonaDomainService } from './persona.domain.service';
import { PersonaDomainEntity } from '../model/persona';


describe('IPersonaDomainService', () => {
  let personaDomainService: IPersonaDomainService;

  beforeEach(() => {
    personaDomainService = {
      registar: jest.fn(),
      findOneBy: jest.fn(),
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
   });