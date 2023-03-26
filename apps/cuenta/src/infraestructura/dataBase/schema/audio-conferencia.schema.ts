import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AudioConferenciaDomainEntity } from 'apps/cuenta/src/dominio/model/entidades/audio-conferencia.dominio.entidad';


@Schema({collection: 'VideoConferencia',versionKey: false})
export class AudioConferenciaSchema extends AudioConferenciaDomainEntity {

   
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
        type: Boolean,
        index: true,
    })
    audio: true;


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
export type AudioConferenciaDocument = HydratedDocument<AudioConferenciaSchema>;

export const AudioconferenciaFactory = SchemaFactory.createForClass(AudioConferenciaSchema);