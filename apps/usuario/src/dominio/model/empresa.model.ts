import { IDatosBasicosModel } from "./interface/datos-basicos.interface";
import { IEmpresaDomainModel } from "./interface/empresa.interface";

export class EmpresaDomainEntity implements IDatosBasicosModel , IEmpresaDomainModel {
    
    
    nombre: string;
    mail: string;
    clave: string;
    
    cantidadEmpleado: number;
    rut: number;
    rubro: string;

    constructor(_dato?: IDatosBasicosModel , empresa?: IEmpresaDomainModel) {

        if (_dato?.nombre)
            this.nombre= _dato.nombre;

        if (_dato?.mail)
            this.mail = _dato.mail;

        if (_dato?.clave)
            this.clave = _dato.clave;

        if (empresa?.cantidadEmpleado)
        this.cantidadEmpleado = empresa.cantidadEmpleado;

        if (empresa?.rut)
            this.rut= empresa.rut;

        if (empresa?.rubro)
            this.rubro = empresa.rubro;


    }
}