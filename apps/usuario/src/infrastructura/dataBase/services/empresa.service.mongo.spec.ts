import { Test, TestingModule } from "@nestjs/testing";
import { lastValueFrom, of } from 'rxjs';
import { EmpresaMongoService } from "./empresa.service.mongo";
import { EmpresaRepository } from "../repository/empresa.repository";

import { EmpresaDomainEntity } from '../../../dominio/model/empresa.model';




describe('AudioConferenciaMongoService', () => {
    let empresaMongoService: EmpresaMongoService;
    let empresaRepository: EmpresaRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            EmpresaMongoService,
          {
            provide: EmpresaRepository,
            useValue: {
              registar: jest.fn(),
              findOneBy: jest.fn(),
            },
          },
        ],
      }).compile();

      empresaMongoService = module.get<EmpresaMongoService>(EmpresaMongoService);
      empresaRepository = module.get<EmpresaRepository>(EmpresaRepository);
      
    });
  
    it('should be defined', () => {
      expect(empresaMongoService).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva audioConferencia', async () => {
          // Arrange
          const Empresa : EmpresaDomainEntity= 
            {
                nombre: "cristian",
                mail: "cris@gmail.com",
                clave: "123",
                
                cantidadEmpleado: 1,
                rut: 123,
                rubro: "deporte",
                setPassword: expect.any(Function),
            }

          const mockaEmpresa = 
            {
                _id : "abc1234",
                nombre: "cristian",
                mail: "cris@gmail.com",
                clave: "123",
                
                cantidadEmpleado: 1,
                rut: 123,
                rubro: "deporte",
                setPassword: expect.any(Function),
            };

          const expectedEmpresa = 
            {
                _id : "abc1234",
                nombre: "cristian",
                mail: "cris@gmail.com",
                clave: "123",
                
                cantidadEmpleado: 1,
                rut: 123,
                rubro: "deporte",
                setPassword: expect.any(Function),
            };
          
          jest.spyOn(empresaRepository, 'registar').mockReturnValue(of(mockaEmpresa));
    
          // Act
          const result = empresaMongoService.registar(Empresa);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedEmpresa);
        });
      });

      //----------------FindOneBy----------------


      describe('findOneBy', () => {
        it('Debe de retornar una empresa', (done) => {
          // Arrange


        const Empresa = "cristian@gmail.com"
        
        const mockaEmpresa = 
        {
            _id : "abc1234",
            nombre: "cristian",
            mail: "cristian@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
        };
        const expectedEmpresa = 
        {
            _id : "abc1234",
            nombre: "cristian",
            mail: "cristian@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
        };
          jest.spyOn(empresaRepository, 'findOneBy').mockReturnValue(of(mockaEmpresa) as any);
    
          // Act
          const result = empresaMongoService.findOneBy(Empresa);
    
          // Assert

          result.subscribe({
            next: (empresa) => expect(empresa).toEqual(expectedEmpresa),
            complete: () => { 
              done();
            },
          });
        });
      });
     
    });