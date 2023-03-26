import { IsString } from "class-validator";

export class BuscarVideoConferenciaDto  {
    
    @IsString()
    id: string;
    
}