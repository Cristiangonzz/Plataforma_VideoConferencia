import { IsString } from "class-validator";

export class UnirseAudioConferenciaDto {
    
    @IsString()
    id: string;
    
    @IsString()
    participante: string;
    
}