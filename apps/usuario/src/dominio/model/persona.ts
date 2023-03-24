import { IDatosBasicosModel } from './interface/datos-basicos.interface';

export class PersonaDomainEntity  implements IDatosBasicosModel{
 
  nombre: string;
  email: string;
  clave: string;
}
