import { DatosBasicos } from './interface/datos-basicos.interface';
export class EmpresaModel implements DatosBasicos {
    nombre: string;
    email: string;
    clave: string;
    
    cantidadEmpleado:number;
    rut:number;
    rubro: string ;
}