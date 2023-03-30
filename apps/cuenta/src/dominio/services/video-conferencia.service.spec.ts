
import { of ,Observable} from 'rxjs';
import { IVideoConferenciaDomainService } from './video-conferencia.service';
import { VideoConferenciaDomainEntity } from '../model/entidades/video-conferencia.dominio.entidad';

describe('IVideoConferenciaDomainService', () => {
  let videoConferenciaDomainService: IVideoConferenciaDomainService;

  beforeEach(() => {
    videoConferenciaDomainService = {
        crearVideoConferencia: jest.fn(),
    };
  });

  describe('crearVideoConferencia', () => {
    it('should call crearVideoConferencia method', () => {
      const conferencia: VideoConferenciaDomainEntity = 
    { 
        anfitrion: "uruguay",
        participante: ["uruguay"],
        chatVivo: true,
        grabacion: false,
        pizzarra: false,
        compartirArchivo: false,
        presentacion: false,
    };
      videoConferenciaDomainService.crearVideoConferencia(conferencia);
      expect(videoConferenciaDomainService.crearVideoConferencia).toHaveBeenCalledWith(conferencia);
    });

    it('should return an Observable of type T', () => {
      const conferencia: VideoConferenciaDomainEntity =
        { 
            anfitrion: "uruguay",
            participante: ["uruguay"],
            chatVivo: true,
            grabacion: false,
            pizzarra: false,
            compartirArchivo: false,
            presentacion: false,
        };
      const mockReturnValue: VideoConferenciaDomainEntity = 
        { 
            anfitrion: "uruguay",
            participante: ["uruguay"],
            chatVivo: true,
            grabacion: false,
            pizzarra: false,
            compartirArchivo: false,
            presentacion: false, 
        };
      (videoConferenciaDomainService.crearVideoConferencia as jest.Mock).mockReturnValue(of(mockReturnValue));
      const result = videoConferenciaDomainService.crearVideoConferencia(conferencia);
      expect(result).toBeInstanceOf(Observable);
      result.subscribe((value) => expect(value).toEqual(mockReturnValue));
    });
  });

   });