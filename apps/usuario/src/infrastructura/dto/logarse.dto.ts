import { IsString, IsEmail } from 'class-validator';

export class LogearseDto {

    @IsEmail()
    mail: string;

    @IsString()
    clave: string;
}