import { IsString } from "class-validator";
import { videoConferenciaSchema } from "../dataBase/schema/video-conferencia.schema";

export class CrearVideoConferenciaDTO extends videoConferenciaSchema {	

    @IsString()
    anfitrion: string;
}
