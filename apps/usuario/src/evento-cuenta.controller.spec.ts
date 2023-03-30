import { Test, TestingModule } from "@nestjs/testing";
import { EventoCuentaController } from "./evento-cuenta.controller";
import { PersonaService } from "./infrastructura/service/persona.service";
import { of ,lastValueFrom} from "rxjs";
import { PersonaDomainEntity } from "./dominio/model/persona";
import { BuscarPersonaUseCase } from "./aplicacion/useCase/persona/buscar-persona.use-case";

describe('EventoCuentaController', () => {

  let eventController: EventoCuentaController;
  let servicio: PersonaService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PersonaService,
          useValue: {
            findOneBy: jest.fn(),
          },
        },
       
      ],
      controllers: [EventoCuentaController],
    }).compile();

    eventController = module.get<EventoCuentaController>(EventoCuentaController);
    servicio = module.get<PersonaService>(PersonaService);
   
  });


  it('should be defined', () => {
    expect(eventController).toBeDefined();
    expect(servicio).toBeDefined();
   
  });

  describe('cuenta.videoConferencia.creada', () => {
    it('debe retornar un Observable<string>', async () => {
      // Arrange
      const Persona : PersonaDomainEntity= 
        {
          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),
        };
       

      const mockaPersona : PersonaDomainEntity= 
        {
          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),
        };

      const expectedPersona = "cris@gmail.com";
       

     //Mockear el caso de uso y el publisher
     jest
      .spyOn(BuscarPersonaUseCase.prototype, 'execute')
      .mockReturnValue(of(mockaPersona));


    // Act

    const result = eventController.cuentaVideoConferencia(Persona.mail);

    // Assert
    expect(await lastValueFrom(result) ).toEqual((expectedPersona));
     })
      });
  

      describe('cuenta.audioConferencia.creada', () => {
        it('debe retornar un Observable<string>', async () => {
          // Arrange
          const Persona : PersonaDomainEntity= 
            {
              nombre: "Cristian",              
              mail:  "cris@gmail.com",
              clave: "123456",
              setPassword: expect.any(Function),
            };
           
    
          const mockaPersona : PersonaDomainEntity= 
            {
              nombre: "Cristian",              
              mail:  "cris@gmail.com",
              clave: "123456",
              setPassword: expect.any(Function),
            };
    
          const expectedPersona = "cris@gmail.com";
           
    
         //Mockear el caso de uso y el publisher
         jest
          .spyOn(BuscarPersonaUseCase.prototype, 'execute')
          .mockReturnValue(of(mockaPersona));
    
    
        // Act
    
        const result = eventController.cuentaAudioConferencia(Persona.mail);
    
        // Assert
        expect(await lastValueFrom(result) ).toEqual((expectedPersona));
         })
          });

    });