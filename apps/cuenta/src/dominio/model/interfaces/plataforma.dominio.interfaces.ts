import { IVideoConferencia } from './video-conferencia.dominio.interfaces';

export interface IPlataforma {
    url: string;
    persona: string[];
    empresa: string[];
    conferencia: IVideoConferencia[];

}