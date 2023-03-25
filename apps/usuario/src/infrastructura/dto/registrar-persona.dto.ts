import { IsEmail, IsString } from "class-validator";
import { PersonaSchema } from "../dataBase/schema/persona.shema";

export class RegistrarPersonaDto extends PersonaSchema{
    @IsString()
    nombre: string;

    @IsEmail()
    mail: string;

    @IsString()
    clave: string;
}