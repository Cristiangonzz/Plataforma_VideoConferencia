export interface IVideoConferencia {
  anfitrion: string;
  participante?: string[];
  chatVivo?:boolean;
  grabacion?:boolean;  
  pizzarra?:boolean;  
  compartirArchivo?:boolean;  
  presentacion?:boolean;  
}