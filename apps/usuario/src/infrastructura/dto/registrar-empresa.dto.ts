import { IsEmail, IsNumber, IsPositive, IsString } from "class-validator";
import { EmpresaSchema } from '../dataBase/schema/empresa.shema';

export class CrearEmpresaDto extends EmpresaSchema{
    @IsString()
    nombre: string;
    
    @IsEmail()
    mail: string;
        
    @IsString()
    clave: string;
    
    @IsNumber()
    @IsPositive()
    cantidadEmpleado:number;
    
    @IsNumber()
    @IsPositive()
    rut:number;
    
    @IsString()
    rubro: string 
}