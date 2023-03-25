import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';


@Schema({collection: 'VideoConferencia',versionKey: false})
export class videoConferenciaSchema extends VideoConferenciaDomainEntity {

   
    @Prop({
        type: String,
        index: true,
        unique: true,
        required: true,
    })
    url: string;

    @Prop({
        type: String,
        index: true,
        unique: true,
        required: true,
      })
      anfitrion: string;
  
    @Prop({
        type: String,
        index: true,
    })
    chatVivo: true;
    @Prop({
        type: String,
        index: true,
       
    })
    grabacion: false;
    @Prop({
        type: String,
        index: true,
      
    })
    pizzarra: false;
    @Prop({
        type: String,
        index: true,
        
    })
    compartirArchivo: false;
    @Prop({
        type: String,
        index: true,
        
    })
    presentacion: false;
  


    @Prop({
        type: [String],
        index: true,
      })
    participantes: string[];
    
  
}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type videoConferenciaDocument = HydratedDocument<videoConferenciaSchema>;

export const VideoconferenciaFactory = SchemaFactory.createForClass(videoConferenciaSchema);