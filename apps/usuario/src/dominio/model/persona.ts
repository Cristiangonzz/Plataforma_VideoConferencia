import { DatosBasicos } from './interface/datos-basicos.interface';
export class PersonaModel  implements DatosBasicos{
 
  nombre: string;
  email: string;
  contrasenia: string;
}
