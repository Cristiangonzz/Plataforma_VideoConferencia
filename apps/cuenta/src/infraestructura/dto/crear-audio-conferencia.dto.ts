
import { IsString } from "class-validator";
import { AudioConferenciaSchema } from '../dataBase/schema/audio-conferencia.schema';

export class CrearAudioConferenciaDTO extends AudioConferenciaSchema {	

    @IsString()
    url: string;

    @IsString()
    anfitrion: string;

    @IsString()
    participantes: string[];
}
