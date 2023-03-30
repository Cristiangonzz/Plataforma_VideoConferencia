import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { RegistrarEmpresaDto } from '../../../dto/registrar-empresa.dto';
import { EmpresaRegistradaPublisher } from './empresa-registrada.publisher';

describe('EmpresaRegistradaPublisher', () => {
  let publisher: EmpresaRegistradaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmpresaRegistradaPublisher,
        {
          provide: 'USUARIO_SERVICE',
          useValue: {
            emit: jest.fn(() => of(true)),
          },
        },
      ],
    }).compile();

    publisher = module.get<EmpresaRegistradaPublisher>(EmpresaRegistradaPublisher);
    clientProxy = module.get<ClientProxy>('USUARIO_SERVICE');
  });

  describe('publish', () => {
    it('should publish data to client proxy', () => {
      const data :RegistrarEmpresaDto = 
      { 
        nombre: 'uruguay',     
        mail: "uruguay@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),
        cantidadEmpleado:1,
        rut:123,
        rubro: "deporte"
    };
      const expectedPayload = JSON.stringify({ data });

      const result = publisher.publish(data);

      expect(clientProxy.emit).toHaveBeenCalledWith('usuario.empresa.registrada', expectedPayload);
      expect(result).toBeDefined();
    });
  });
});





