import { IDatosBasicosModel } from './interface/datos-basicos.interface';

export class PersonaDomainEntity  implements IDatosBasicosModel{
 
  nombre: string;
  mail: string;
  clave: string;
}
