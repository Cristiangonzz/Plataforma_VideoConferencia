import { Model } from "mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { lastValueFrom } from 'rxjs';
import { EmpresaSchema } from "../schema/empresa.shema";
import { EmpresaRepository } from "./empresa.repository";






describe('EmpresaRepository', () => {
    let empresaRepository: EmpresaRepository;
    let empresaModel: Model<EmpresaSchema>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
            EmpresaRepository,
          {
            provide: getModelToken(EmpresaSchema.name),
            useValue: {
                create: jest.fn(),
                findOne: jest.fn(),
            },
          },
        ],
      }).compile();

      empresaRepository = module.get<EmpresaRepository>(EmpresaRepository);
      empresaModel = module.get<Model<EmpresaSchema>>(getModelToken(EmpresaSchema.name));
      
    });
  
    it('should be defined', () => {
      expect(EmpresaRepository).toBeDefined();
    });
  

    describe('create', () => {
        it('debe crear una nueva Empresa', async () => {
          // Arrange
          const empresa = {
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
           // setPassword: jest.fn(),
            setPassword: expect.any(Function),
            }

          const mockUsuario = 
            {
            _id: '641c70d41964e9445f593bcc',
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
            };
          const expectedUsuario = {
            _id: '641c70d41964e9445f593bcc',
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
          };
          jest.spyOn(empresaModel, 'create').mockResolvedValue(mockUsuario as any);
    
          // Act
          const result = empresaRepository.registar(empresa);
    
          // Assert
          expect(await lastValueFrom(result)).toEqual(expectedUsuario);
        });
      });

      describe('findOneBy', () => {
        it('Debe retornar un Empresa', (done) => {
          // Arrange
          const empresa = "uruguay@gmail.com";

          const mockUsuario = new EmpresaSchema(
          {
            
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
        },
          {

              
              cantidadEmpleado: 1,
              rut: 123,
              rubro: "deporte",
            },  
          );
          const expectedUsuario = {
            
            nombre: "Uruguay",
            mail: "uruguay@gmail.com",
            clave: "123",
            
            cantidadEmpleado: 1,
            rut: 123,
            rubro: "deporte",
          };

          jest.spyOn(empresaModel, 'findOne').mockReturnValue(mockUsuario as any);

          // Act
          const result = empresaRepository.findOneBy(empresa);
    
          // Assert
          result.subscribe({
            next: (empresa) =>  expect(empresa).toEqual(expectedUsuario),
            complete: () => {
              done();
            },
          });
        });
      })
    
    });
