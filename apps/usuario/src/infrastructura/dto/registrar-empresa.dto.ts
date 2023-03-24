import { IsEmail, IsNumber, IsString } from "class-validator";
import { PersonaSchema } from "../dataBase/schema/persona.shema";
import { EmpresaSchema } from '../dataBase/schema/empresa.shema';

export class CrearEmpresaDto extends EmpresaSchema{
    @IsString()
    nombre: string;
    
    @IsString()
    mail: string;
        
    @IsString()
    clave: string;
    
    @IsNumber()
    cantidadEmpleado:number;
    
    @IsNumber()
    rut:number;
    
    @IsString()
    rubro: string 
}