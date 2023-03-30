import { Test, TestingModule } from '@nestjs/testing';
import { AudioConferenciaCreadaPublisher } from './audio-conferencia-creada.publisher';
import { ClientProxy } from '@nestjs/microservices';
import { of, throwError,pipe } from 'rxjs';
import { map, retry } from 'rxjs/operators';

describe('AudioConferenciaCreadaPublisher', () => {
  let publisher: AudioConferenciaCreadaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AudioConferenciaCreadaPublisher,
        {
          provide: 'CUENTA_SERVICE',
          useValue: {
            send: jest.fn(() => of('OK')),
          },
        },
      ],
    }).compile();

    publisher = module.get<AudioConferenciaCreadaPublisher>(AudioConferenciaCreadaPublisher);
    clientProxy = module.get<ClientProxy>('CUENTA_SERVICE');
  });

  describe('AudioConferenciaCreadaPublisher', () => {
    it('should return the response from the client proxy', done => {
      const data = 'cris@gmail.com';

      publisher.publish(data).subscribe(res => {
        expect(clientProxy.send).toHaveBeenCalledWith('cuenta.audioConferencia.creada', data);
        expect(res).toBe('OK');
        done();
      });
    });

    it('should retry up to 2 times on error', done => {
        const data = 'cris@gmail.com';
        (clientProxy.send as jest.Mock).mockReturnValueOnce(
            of('OK').pipe(
              map((res: string) => res),
              retry(2)
            )
          );
      publisher.publish(data).subscribe(res => {
        expect(clientProxy.send).toHaveBeenCalledWith("cuenta.audioConferencia.creada", data);
        expect(res).toBe('OK');
        done();
      });
    });

  });
});



