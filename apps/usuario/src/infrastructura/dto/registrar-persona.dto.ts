import { IsEmail, IsString } from "class-validator";
import { PersonaSchema } from "../dataBase/schema/persona.shema";

export class CreateCustomerDto extends PersonaSchema{
    @IsString()
    nombreCompleto: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}