
import { of ,Observable} from 'rxjs';
import { IAudioConferenciaDomainService } from './audio-conferencia.service';
import { AudioConferenciaDomainEntity } from '../model/entidades/audio-conferencia.dominio.entidad';

describe('IAudioConferenciaDomainService', () => {
  let audioConferenciaDomainService: IAudioConferenciaDomainService;

  beforeEach(() => {
    audioConferenciaDomainService = {
        crearAudioConferencia: jest.fn(),
    };
  });

  describe('crearAudioConferencia', () => {
    it('should call crearAudioConferencia method', () => {
      const conferencia: AudioConferenciaDomainEntity = 
    { 
        anfitrion: "uruguay",
        participantes: ["uruguay"],
        audio: true
    };
      audioConferenciaDomainService.crearAudioConferencia(conferencia);
      expect(audioConferenciaDomainService.crearAudioConferencia).toHaveBeenCalledWith(conferencia);
    });

    it('should return an Observable of type T', () => {
      const conferencia: AudioConferenciaDomainEntity =
        { 
            anfitrion: "uruguay",
            participantes: ["uruguay"],
            audio: true
        };
      const mockReturnValue: AudioConferenciaDomainEntity = 
        { 
            anfitrion: "uruguay",
            participantes: ["uruguay"],
            audio: true 
        };
      (audioConferenciaDomainService.crearAudioConferencia as jest.Mock).mockReturnValue(of(mockReturnValue));
      const result = audioConferenciaDomainService.crearAudioConferencia(conferencia);
      expect(result).toBeInstanceOf(Observable);
      result.subscribe((value) => expect(value).toEqual(mockReturnValue));
    });
  });

   });
