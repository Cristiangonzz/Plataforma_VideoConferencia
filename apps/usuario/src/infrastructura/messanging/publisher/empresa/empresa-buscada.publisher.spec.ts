import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { EmpresaBuscadaPublisher } from './empresa-buscada.publisher';
import { RegistrarEmpresaDto } from '../../../dto/registrar-empresa.dto';

describe('EmpresaBuscadaPublisher', () => {
  let publisher: EmpresaBuscadaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmpresaBuscadaPublisher,
        {
          provide: 'USUARIO_SERVICE',
          useValue: {
            emit: jest.fn(() => of(true)),
          },
        },
      ],
    }).compile();

    publisher = module.get<EmpresaBuscadaPublisher>(EmpresaBuscadaPublisher);
    clientProxy = module.get<ClientProxy>('USUARIO_SERVICE');
  });

  describe('publish', () => {
    it('should publish data to client proxy', () => {
      const data :RegistrarEmpresaDto = 
      { 
        nombre: 'Juan',     
        mail: "cris@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),

        cantidadEmpleado: 1,
        rubro: "deporte",
        rut : 123,
        
    };
      const expectedPayload = JSON.stringify({ data });

      const result = publisher.publish(data);

      expect(clientProxy.emit).toHaveBeenCalledWith('usuario.empresa.buscada', expectedPayload);
      expect(result).toBeDefined();
    });
  });
});