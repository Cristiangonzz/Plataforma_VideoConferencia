import { Test, TestingModule } from '@nestjs/testing';
import { Observable,lastValueFrom, of } from 'rxjs';
import { AudioConferenciaService } from '../services/audio-conferencia.service';
import { AudioConferenciaController } from './audio-conferencia.controller';
import { AudioConferenciaCreadaPublisher } from '../menssaging/publisher/video-conferencia/audio-conferencia-creada.publisher';
import { CrearAudioConferenciaUseCase } from '../../aplicacion/casoDeUso/audioConferencia/crear-audio-conferencia.use-case';
import { AudioConferenciaSchema } from '../dataBase/schema/audio-conferencia.schema';

describe('AudioConferenciaController', () => {

  let api: AudioConferenciaController;
  let servicio: AudioConferenciaService;
  let evento: AudioConferenciaCreadaPublisher;

  const _id = '641c65deff0153dd0f36bf5';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AudioConferenciaService,
          useValue: {},
        },
        {
            provide: AudioConferenciaCreadaPublisher,
            useValue: {
                publish : jest.fn()
            },
          },
      ],
      controllers: [AudioConferenciaController],
    }).compile();

    api = module.get<AudioConferenciaController>(AudioConferenciaController);
    servicio = module.get<AudioConferenciaService>(AudioConferenciaService);
    evento = module.get<AudioConferenciaCreadaPublisher>(AudioConferenciaCreadaPublisher);
  });


  it('should be defined', () => {
    expect(api).toBeDefined();
    expect(servicio).toBeDefined();
    expect(evento).toBeDefined();
  });

  describe('create', () => {
    it('debe crear una nueva audioConferencia', async () => {
      // Arrange
      const audio = {
        anfitrion: "cris@gmail.com",
        }

      const mockaAudio :AudioConferenciaSchema= 
        {
        anfitrion : "cris@gmail.com",
        participantes: ["a"],
        audio: true,
        };

      const expectedAudio:AudioConferenciaSchema = {
        anfitrion : "cris@gmail.com",
        participantes: ["a"],
        audio: true,
      };
      //Mockear el caso de uso 
       const crearAudioConferenciaUseCaseMock = jest.spyOn(CrearAudioConferenciaUseCase.prototype, 'execute');
       crearAudioConferenciaUseCaseMock.mockReturnValue(of(new AudioConferenciaSchema(mockaAudio)));

      jest.spyOn(evento, 'publish').mockReturnValue(of(audio.anfitrion));

      // Act

      const result = api.crearAudioConferencia(audio);

      // Assert
      expect(await lastValueFrom(result)).toEqual(expectedAudio);
    })

  });


});