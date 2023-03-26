
import { IsBoolean, IsString } from "class-validator";
import { AudioConferenciaSchema } from '../dataBase/schema/audio-conferencia.schema';

export class CrearVideoCnferenciaDTO extends AudioConferenciaSchema {	

    @IsString()
    url: string;

    @IsString()
    anfitrion: string;
  
    @IsBoolean()
    audio: true;

    @IsString()
    participantes: string[];
}
