import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { VideoConferenciaDomainEntity } from '../../../dominio/model/entidades/video-conferencia.dominio.entidad';


@Schema({collection: 'VideoConferencia',versionKey: false})
export class VideoConferenciaSchema extends VideoConferenciaDomainEntity {


    @Prop({
        type: String,
        index: true,
        unique: true,
        required: true,
      })
      anfitrion: string;
  
    @Prop({
        type: Boolean,
        index: true,
      
    })
    chatVivo: boolean;

    @Prop({
        type: Boolean,
        index: true,
       
    })
    grabacion: boolean;

    @Prop({
        type: Boolean,
        index: true,
      
      
    })
    pizzarra: boolean;
    @Prop({
        type: Boolean,
        index: true,
        
        
    })
    compartirArchivo: boolean;

    @Prop({
        type: Boolean,
        index: true,
    })
    presentacion: boolean;
  


    @Prop({
        type: [String],
        index: true,
      })
    participante: string[];
    
  
}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type videoConferenciaDocument = HydratedDocument<VideoConferenciaSchema>;

export const VideoconferenciaFactory = SchemaFactory.createForClass(VideoConferenciaSchema);