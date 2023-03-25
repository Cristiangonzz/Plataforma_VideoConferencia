import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PlataformaDomainEntity } from '../../../dominio/model/entidades/plataforma.domain.entidad';
import { IPersonaCuenta } from '../../../dominio/model/interfaces/persona.domain.interface.usuario';
import { IEmpresaCuenta } from '../../../dominio/model/interfaces/empresa.dominio.interface.usuario';
import { IVideoConferencia } from 'apps/cuenta/src/dominio/model/interfaces/video-conferencia.dominio.interfaces';
import { VideoconferenciaFactory, videoConferenciaSchema } from './video-conferencia.schema';
import { EmpresaSchema, EmpresaSchemaFactory } from 'apps/usuario/src/infrastructura/dataBase/schema/empresa.shema';


@Schema({collection: 'Plataforma',versionKey: false})
export class PlataformaSchema extends PlataformaDomainEntity {
 

  @Prop({ type: String, index: true ,required: true })
  url: string;

  @Prop({
    type: [String],
    index: true,
  })
  persona: string[];

  
   @Prop({
     type: [String],
     index: true,
   })
   empresa: string[];


  @Prop({
    type: [{ type: VideoconferenciaFactory, ref: videoConferenciaSchema.name}],
  })
  conferencia: Array<videoConferenciaSchema>;




}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type PlataformaDocument = HydratedDocument<PlataformaSchema>;

export const PlataformaSchemaFactory = SchemaFactory.createForClass(PlataformaSchema);