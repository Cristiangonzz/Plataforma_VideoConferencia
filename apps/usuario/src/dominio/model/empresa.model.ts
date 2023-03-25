import { IDatosBasicosModel } from "./interface/datos-basicos.interface";
import { IEmpresaDomainModel } from "./interface/empresa.interface";

export class EmpresaDomainEntity implements IDatosBasicosModel , IEmpresaDomainModel {
    
    
    nombre: string;
    mail: string;
    clave: string;
    
    cantidadEmpleado: number;
    rut: number;
    rubro: string;

}