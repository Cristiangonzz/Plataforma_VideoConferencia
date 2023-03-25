import { IPersonaCuenta } from './persona.domain.interface.usuario';
import { IEmpresaCuenta } from './empresa.dominio.interface.usuario';
import { IVideoConferencia } from './video-conferencia.dominio.interfaces';

export interface IPlataforma {
    url: string;
    persona: IPersonaCuenta[];
    empresa: IEmpresaCuenta[];
    conferencia: IVideoConferencia[];

}