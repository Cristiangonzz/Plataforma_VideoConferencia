import {  IsEmail } from 'class-validator';

export class CrearVideoConferenciaDTO {	

    @IsEmail()
    anfitrion: string;
}
