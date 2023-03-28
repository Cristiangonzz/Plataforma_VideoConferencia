
import {  IsEmail } from 'class-validator';

export class CrearAudioConferenciaDTO  {	

    @IsEmail()
    anfitrion: string;

}
