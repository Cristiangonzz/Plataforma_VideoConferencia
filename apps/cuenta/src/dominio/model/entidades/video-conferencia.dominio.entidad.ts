import { IVideoConferencia } from '../interfaces/video-conferencia.dominio.interfaces';

export class VideoConferenciaDomainEntity implements IVideoConferencia {
   
    anfitrion: string;
    participante?: string[];
    chatVivo?: boolean;
    grabacion?: boolean;
    pizzarra?: boolean;
    compartirArchivo?: boolean;
    presentacion?: boolean;

    constructor(_dato?: IVideoConferencia) {

        if (_dato?.anfitrion)
            this.anfitrion = _dato.anfitrion;

        if (_dato?.participante)
            this.participante = _dato.participante;
        
        if (_dato?.chatVivo)
        this.chatVivo = _dato.chatVivo;

        if (_dato?.grabacion)
        this.grabacion = _dato.grabacion;

        if (_dato?.pizzarra)
        this.pizzarra = _dato.pizzarra;

        if (_dato?.compartirArchivo)
        this.compartirArchivo = _dato.compartirArchivo;
        
        if (_dato?.presentacion)
        this.presentacion = _dato.presentacion;

    }
}