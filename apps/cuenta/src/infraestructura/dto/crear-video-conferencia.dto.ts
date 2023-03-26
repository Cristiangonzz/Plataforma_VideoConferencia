import { IsBoolean, IsString } from "class-validator";
import { videoConferenciaSchema } from "../dataBase/schema/video-conferencia.schema";

export class CrearVideoCnferenciaDTO extends videoConferenciaSchema {	

    @IsString()
    url: string;

    @IsString()
    anfitrion: string;

    @IsString()
    participantes: string[];

    @IsBoolean()
    chatVivo:true;

    @IsBoolean()
    grabacion:false;

    @IsBoolean()  
    pizzarra:false;

    @IsBoolean()  
    compartirArchivo:false;

    @IsBoolean()  
    presentacion:false;  
}
