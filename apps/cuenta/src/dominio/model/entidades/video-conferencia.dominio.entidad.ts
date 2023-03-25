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
       
}