import { IsString } from "class-validator";

export class BuscarAudioConferenciaDto {
    
    @IsString()
    id: string;
    
}