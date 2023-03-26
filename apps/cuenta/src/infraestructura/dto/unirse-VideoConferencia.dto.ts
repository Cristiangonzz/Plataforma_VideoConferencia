import { IsString } from "class-validator";

export class UnirseVideoConferenciaDto {
    
    @IsString()
    id: string;
    
    @IsString()
    participante: string;
    
}