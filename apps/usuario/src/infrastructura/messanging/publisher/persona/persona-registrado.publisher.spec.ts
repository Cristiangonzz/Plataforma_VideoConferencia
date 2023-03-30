import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { PersonaRegistradaPublisher } from './persona-registrado.publisher';
import { RegistrarPersonaDto } from '../../../dto/registrar-persona.dto';

describe('PersonaRegistradaPublisher', () => {
  let publisher: PersonaRegistradaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonaRegistradaPublisher,
        {
          provide: 'USUARIO_SERVICE',
          useValue: {
            emit: jest.fn(() => of(true)),
          },
        },
      ],
    }).compile();

    publisher = module.get<PersonaRegistradaPublisher>(PersonaRegistradaPublisher);
    clientProxy = module.get<ClientProxy>('USUARIO_SERVICE');
  });

  describe('publish', () => {
    it('should publish data to client proxy', () => {
      const data :RegistrarPersonaDto = 
      { 
        nombre: 'Juan',     
        mail: "cris@gmail.com",
        clave: "123",
        setPassword: expect.any(Function),
        
    };
      const expectedPayload = JSON.stringify({ data });

      const result = publisher.publish(data);

      expect(clientProxy.emit).toHaveBeenCalledWith('usuario.persona.registrada', expectedPayload);
      expect(result).toBeDefined();
    });
  });
});





