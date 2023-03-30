import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { PersonaBuscadaPublisher } from './persona-buscada.publisher';
import { IDatosBasicosModel } from 'apps/usuario/src/dominio/model/interface/datos-basicos.interface';

describe('PersonaBuscadaPublisher', () => {
  let publisher: PersonaBuscadaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonaBuscadaPublisher,
        {
          provide: 'USUARIO_SERVICE',
          useValue: {
            emit: jest.fn(() => of(true)),
          },
        },
      ],
    }).compile();

    publisher = module.get<PersonaBuscadaPublisher>(PersonaBuscadaPublisher);
    clientProxy = module.get<ClientProxy>('USUARIO_SERVICE');
  });

  describe('publish', () => {
    it('should publish data to client proxy', () => {
      const data :IDatosBasicosModel = 
      { 
        nombre: 'Juan',     
        mail: "cris@gmail.com",
        clave: "123",
        
    };
      const expectedPayload = JSON.stringify({ data });

      const result = publisher.publish(data);

      expect(clientProxy.emit).toHaveBeenCalledWith('usuario.persona.buscada', expectedPayload);
      expect(result).toBeDefined();
    });
  });
});





