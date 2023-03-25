import { IVideoConferencia } from '../interfaces/video-conferencia.dominio.interfaces';

export class VideoConferenciaDomainEntity implements IVideoConferencia {
   
    url: string;
    anfitrion: string;
    participantes: string[];
    chatVivo: true;
    grabacion: false;
    pizzarra: false;
    compartirArchivo: false;
    presentacion: false;

    constructor(_dato?: IVideoConferencia) {

        if (_dato?.url)
            this.url= _dato.url;

        if (_dato?.anfitrion)
            this.anfitrion = _dato.anfitrion;

        if (_dato?.participantes)
            this.participantes = _dato.participantes;

    }
}