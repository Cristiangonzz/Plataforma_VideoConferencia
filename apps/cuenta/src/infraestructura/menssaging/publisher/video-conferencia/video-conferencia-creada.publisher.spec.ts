import { Test, TestingModule } from '@nestjs/testing';
import { AudioConferenciaCreadaPublisher } from './audio-conferencia-creada.publisher';
import { ClientProxy } from '@nestjs/microservices';
import { of, throwError,pipe } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { VideoConferenciaCreadaPublisher } from './video-conferencia-creada.publisher';

describe('VideoConferenciaCreadaPublisher', () => {
  let publisher: VideoConferenciaCreadaPublisher;
  let clientProxy: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideoConferenciaCreadaPublisher,
        {
          provide: 'CUENTA_SERVICE',
          useValue: {
            send: jest.fn(() => of('OK')),
          },
        },
      ],
    }).compile();

    publisher = module.get<VideoConferenciaCreadaPublisher>(VideoConferenciaCreadaPublisher);
    clientProxy = module.get<ClientProxy>('CUENTA_SERVICE');
  });

  describe('VideoConferenciaCreadaPublisher', () => {
    it('should return the response from the client proxy', done => {
      const data = 'cris@gmail.com';

      publisher.publisher(data).subscribe(res => {
        expect(clientProxy.send).toHaveBeenCalledWith('cuenta.videoConferencia.creada', data);
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
      publisher.publisher(data).subscribe(res => {
        expect(clientProxy.send).toHaveBeenCalledWith("cuenta.videoConferencia.creada", data);
        expect(res).toBe('OK');
        done();
      });
    });

  });
});