import { IsString } from "class-validator";
import { VideoConferenciaSchema } from "../dataBase/schema/video-conferencia.schema";

export class CrearVideoConferenciaDTO extends VideoConferenciaSchema {	

    @IsString()
    anfitrion: string;
}
