import { Test, TestingModule } from "@nestjs/testing";
import { PersonaBuscadaPublisher } from "../messanging/publisher/persona/persona-buscada.publisher";
import { PersonaRegistradaPublisher } from "../messanging/publisher/persona/persona-registrado.publisher";
import { PersonaService } from "../service/persona.service";
import { PersonaController } from "./persona.controller";
import { RegistrarPersonaDto } from "../dto/registrar-persona.dto";
import { PersonaDomainEntity } from "../../dominio/model/persona";
import { RegistrarPersonaoUseCase } from "../../aplicacion/useCase/persona/registrar-persona.use-case";
import { of,lastValueFrom } from "rxjs";
import { BuscarPersonaUseCase } from '../../aplicacion/useCase/persona/buscar-persona.use-case';

describe('PersonaController', () => {

  let api: PersonaController;
  let servicio: PersonaService;
  let eventoCreada: PersonaRegistradaPublisher;
  let eventoBuscar: PersonaBuscadaPublisher;

  const _id = '641c65deff0153dd0f36bf5';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PersonaService,
          useValue: {},
        },
        {
            provide: PersonaRegistradaPublisher,
            useValue: {
              publish : jest.fn()
            },
        },
        {
          provide: PersonaBuscadaPublisher,
          useValue: {
            publish : jest.fn()
          },
      },
      ],
      controllers: [PersonaController],
    }).compile();

    api = module.get<PersonaController>(PersonaController);
    servicio = module.get<PersonaService>(PersonaService);
    eventoCreada = module.get<PersonaRegistradaPublisher>(PersonaRegistradaPublisher);
    eventoBuscar = module.get<PersonaBuscadaPublisher>(PersonaBuscadaPublisher);
  });


  it('should be defined', () => {
    expect(api).toBeDefined();
    expect(servicio).toBeDefined();
    expect(eventoCreada).toBeDefined();
    expect(eventoBuscar).toBeDefined();
  });

  describe('create', () => {
    it('debe crear una nueva Persona', async () => {
      // Arrange
      const persona:RegistrarPersonaDto = {
          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),
        }

      const mockaPersona : PersonaDomainEntity= 
        {
          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),
        };

      const expectedPersona:PersonaDomainEntity = 
        {
          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),
        };

      //Mockear el caso de uso y el publisher
     jest
      .spyOn(RegistrarPersonaoUseCase.prototype, 'execute')
      .mockReturnValue(of(mockaPersona));

    jest.spyOn(eventoCreada, 'publish').mockReturnValue(of(persona));

    // Act

    const result = api.crearPersona(persona);

    // Assert
    expect(await lastValueFrom(result) ).toEqual((expectedPersona));
     })
      });

      describe('buscar', () => {
        it('debe retornar una  persona ya creada', async () => {
          // Arrange
          const persona:RegistrarPersonaDto = {
              nombre: "Cristian",              
              mail:  "cris@gmail.com",
              clave: "123456",
              setPassword: expect.any(Function),
            }
    
          const mockaPersona : PersonaDomainEntity= 
            {
              nombre: "Cristian",              
              mail:  "cris@gmail.com",
              clave: "123456",
              setPassword: expect.any(Function),
            };
    
          const expectedPersona:PersonaDomainEntity = 
            {
              nombre: "Cristian",              
              mail:  "cris@gmail.com",
              clave: "123456",
              setPassword: expect.any(Function),
            };
    
          //Mockear el caso de uso y el publisher
         jest
          .spyOn(BuscarPersonaUseCase.prototype, 'execute')
          .mockReturnValue(of(mockaPersona));
    
        jest.spyOn(eventoBuscar, 'publish').mockReturnValue(of(persona));
    
        // Act
    
        const result = api.buscarPersona(persona);
    
        // Assert
        expect(await lastValueFrom(result) ).toEqual((expectedPersona));
         })
          });
  });


 