import { IsEmail } from "class-validator";

export class BuscarMail {
    @IsEmail()
    mail: string;
}