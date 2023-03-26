export interface IVideoConferencia {
  anfitrion: string;
  participantes?: string[];
  chatVivo?:boolean;
  grabacion?:boolean;  
  pizzarra?:boolean;  
  compartirArchivo?:boolean;  
  presentacion?:boolean;  
}