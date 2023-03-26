import { IAudioConferencia } from '../interfaces/audio-conferencia.dominio.interfaces';

export class AudioConferenciaDomainEntity implements IAudioConferencia {
   
    url: string;
    anfitrion: string;
    participantes: string[];
    audio: true;
  

    constructor(_dato?: IAudioConferencia) {

        if (_dato?.url)
            this.url= _dato.url;

        if (_dato?.anfitrion)
            this.anfitrion = _dato.anfitrion;

        if (_dato?.participantes)
            this.participantes = _dato.participantes;

            
        if (_dato?.audio)
        this.audio = _dato.audio;

    }
}