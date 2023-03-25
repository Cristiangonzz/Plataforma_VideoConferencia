import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PlataformaDomainEntity } from '../../../dominio/model/entidades/plataforma.domain.entidad';
import { IPersonaCuenta } from '../../../dominio/model/interfaces/persona.domain.interface.usuario';
import { IEmpresaCuenta } from '../../../dominio/model/interfaces/empresa.dominio.interface.usuario';
import { IVideoConferencia } from 'apps/cuenta/src/dominio/model/interfaces/video-conferencia.dominio.interfaces';


@Schema({collection: 'Plataforma',versionKey: false})
export class PlataformaSchema extends PlataformaDomainEntity {
 

  @Prop({ type: String, index: true ,required: true })
  url: string;

  @Prop({
    type: [{ 
      nombre: String,
      mail: String,
      clave: String 
    }],
    index: true,
  })
  persona: IPersonaCuenta[];

  
  @Prop({
    type: [{ 
      nombre: String,
      mail: String,
      clave: String,
      cantidadEmpleado: Number,
      rut:Number,
      rubro: String
    }],
    index: true,
  })
  empresa: IEmpresaCuenta[];

  @Prop({
    type: [{
      url: String,
      anfitrion: String,
      participantes: [String],
      chatVivo:Boolean,
      grabacion:Boolean,  
      pizzarra:Boolean,  
      compartirArchivo:Boolean,  
      presentacion:Boolean, 
    }],
  })
  conferencia: IVideoConferencia[];




}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type PlataformaDocument = HydratedDocument<PlataformaSchema>;

export const PlataformaSchemaFactory = SchemaFactory.createForClass(PlataformaSchema);