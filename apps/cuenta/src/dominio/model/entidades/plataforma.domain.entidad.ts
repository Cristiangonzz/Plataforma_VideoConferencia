import { IPlataforma } from '../interfaces/plataforma.dominio.interfaces';
import { IVideoConferencia } from '../interfaces/video-conferencia.dominio.interfaces';

export class PlataformaDomainEntity implements IPlataforma {
   
    url: string;
    persona: string[];
    empresa: string[];
    conferencia: IVideoConferencia[];

    constructor(_dato?: IPlataforma) {

        if (_dato?.url)
            this.url= _dato.url;

        if (_dato?.persona)
            this.persona = _dato.persona;

        if (_dato?.empresa)
            this.empresa = _dato.empresa;

        if (_dato?.conferencia)
        this.conferencia = _dato.conferencia;

    }
   
}