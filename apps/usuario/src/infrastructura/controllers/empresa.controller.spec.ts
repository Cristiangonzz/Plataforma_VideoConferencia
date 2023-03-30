import { Test, TestingModule } from "@nestjs/testing";
import { RegistrarPersonaDto } from "../dto/registrar-persona.dto";
import { RegistrarPersonaoUseCase } from "../../aplicacion/useCase/persona/registrar-persona.use-case";
import { of,lastValueFrom } from "rxjs";
import { BuscarPersonaUseCase } from '../../aplicacion/useCase/persona/buscar-persona.use-case';
import { EmpresaController } from "./empresa.controller";
import { EmpresaService } from "../service/empresa.service";
import { EmpresaRegistradaPublisher } from "../messanging/publisher/empresa/empresa-registrada.publisher";
import { EmpresaBuscadaPublisher } from "../messanging/publisher/empresa/empresa-buscada.publisher";
import { RegistrarEmpresaDto } from "../dto/registrar-empresa.dto";
import { EmpresaDomainEntity } from "../../dominio/model/empresa.model";
import { BuscarEmpresaUseCase } from "../../aplicacion/useCase/empresa/buscar-empresa.use.case";
import { BuscarMail } from '../dto/buscar-mail..dto';
import { RegistrarEmpresaUseCase } from '../../aplicacion/useCase/empresa/registrar-empresa.use-case';

describe('EmpresaController', () => {

  let api: EmpresaController;
  let servicio: EmpresaService;
  let eventoCreada: EmpresaRegistradaPublisher;
  let eventoBuscar: EmpresaBuscadaPublisher;

  const _id = '641c65deff0153dd0f36bf5';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: EmpresaService,
          useValue: {
            registar: jest.fn(),
          },
        },
        {
            provide: EmpresaRegistradaPublisher,
            useValue: {
                publish : jest.fn()
            },
        },
        {
          provide: EmpresaBuscadaPublisher,
          useValue: {
            publish : jest.fn()
          },
      },
      ],
      controllers: [EmpresaController],
    }).compile();

    api = module.get<EmpresaController>(EmpresaController);
    servicio = module.get<EmpresaService>(EmpresaService);
    eventoCreada = module.get<EmpresaRegistradaPublisher>(EmpresaRegistradaPublisher);
    eventoBuscar = module.get<EmpresaBuscadaPublisher>(EmpresaBuscadaPublisher);
  });


  it('should be defined', () => {
    expect(api).toBeDefined();
    expect(servicio).toBeDefined();
    expect(eventoCreada).toBeDefined();
    expect(eventoBuscar).toBeDefined();
  });

  describe('create', () => {
    it('debe crear una nueva Empresa', async () => {
      // Arrange
      const empresa:RegistrarEmpresaDto = {

          nombre: "Cristian",              
          mail:  "cris@gmail.com",
          clave: "123456",
          setPassword: expect.any(Function),

          cantidadEmpleado: 1,
          rut: 123,
          rubro: "deporte",
        }

      const mockaEmpresa : EmpresaDomainEntity= 
        {
            nombre: "Cristian",              
            mail:  "cris@gmail.com",
            clave: "123456",
            setPassword: expect.any(Function),
  
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
        };

      const expectedEmpresa:EmpresaDomainEntity = 
        {
            nombre: "Cristian",              
            mail:  "cris@gmail.com",
            clave: "123456",
            setPassword: expect.any(Function),
  
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
        };

      //Mockear el caso de uso y el publisher
     jest
      .spyOn(RegistrarEmpresaUseCase.prototype, 'execute')
      .mockReturnValue(of(mockaEmpresa));

    jest.spyOn(eventoCreada, 'publish').mockReturnValue(of(empresa));

    // Act

    const result = api.crearEmpresa(empresa);

    // Assert
    expect(await lastValueFrom(result) ).toEqual((expectedEmpresa));
     })
      });

      describe('buscar', () => {
        it('debe retornar una  empresa ya creada', async () => {
          // Arrange
          const buscarEmpresa: BuscarMail = {
            mail: "cris@gmail.com",
          };

          const Empresa:RegistrarEmpresaDto = {
            nombre: "Cristian",              
            mail:  "cris@gmail.com",
            clave: "123456",
            setPassword: expect.any(Function),
  
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte"
            }
    
          const mockaEmpresa : EmpresaDomainEntity= 
            {
                nombre: "Cristian",              
                mail:  "cris@gmail.com",
                clave: "123456",
                setPassword: expect.any(Function),
      
                cantidadEmpleado: 1,
                rut: 123,
                rubro: "deporte"
            };
    
          const expectedEmpresa:EmpresaDomainEntity = 
            {
                nombre: "Cristian",              
                mail:  "cris@gmail.com",
                clave: "123456",
                setPassword: expect.any(Function),
      
                cantidadEmpleado: 1,
                rut: 123,
                rubro: "deporte"
            };
    
          //Mockear el caso de uso y el publisher
         jest
          .spyOn(BuscarEmpresaUseCase.prototype, 'execute')
          .mockReturnValue(of(mockaEmpresa));
    
        jest.spyOn(eventoBuscar, 'publish').mockReturnValue(of(Empresa));
    
        // Act
    
        const result = api.buscarEmpresa(buscarEmpresa);
    
        // Assert
        expect(await lastValueFrom(result) ).toEqual((expectedEmpresa));
         })
          });
  });


 