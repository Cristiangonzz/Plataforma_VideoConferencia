import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { PersonaEliminadaPublisher } from './persona-eliminada.publisher';

describe('PersonaEliminadaPublisher', () => {
  let publisher: PersonaEliminadaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonaEliminadaPublisher,
        {
          provide: 'USUARIO_SERVICE',
          useValue: {
            emit: jest.fn(() => of(true)),
          },
        },
      ],
    }).compile();

    publisher = module.get<PersonaEliminadaPublisher>(PersonaEliminadaPublisher);
    clientProxy = module.get<ClientProxy>('USUARIO_SERVICE');
  });

  describe('publish', () => {
    it('should publish data to client proxy', () => {
      const data  = true; 
      
      const expectedPayload = data ;

      const result = publisher.publish(data);

      expect(clientProxy.emit).toHaveBeenCalledWith('usuario.persona.eliminada', expectedPayload);
      expect(result).toBeDefined();
    });
  });
});





