import { IsEmail, IsString } from "class-validator";

export class CreateCustomerDto{
    @IsString()
    nombreCompleto: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}