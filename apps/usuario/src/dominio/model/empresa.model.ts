import { DatosBasicos } from './interface/datos-basicos.interface';
export class EmpresaModel implements DatosBasicos {
    nombre: string;
    email: string;
    contrasenia: string;
    
    cantidadEmpleado:number;
    rut:string;
    rubro: string ;
}