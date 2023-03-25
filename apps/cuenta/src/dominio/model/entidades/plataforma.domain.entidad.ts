import { IEmpresaCuenta } from '../interfaces/empresa.dominio.interface.usuario';
import { IPersonaCuenta } from '../interfaces/persona.domain.interface.usuario';
import { IPlataforma } from '../interfaces/plataforma.dominio.interfaces';
import { IVideoConferencia } from '../interfaces/video-conferencia.dominio.interfaces';

export class PlataformaDomainEntity implements IPlataforma {
   
    url: string;
    persona: IPersonaCuenta[];
    empresa: IEmpresaCuenta[];
    conferencia: IVideoConferencia[];
   
}