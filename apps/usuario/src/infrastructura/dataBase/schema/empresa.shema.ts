import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { EmpresaDomainEntity } from '../../../dominio/model/empresa.model';


@Schema({collection: 'Empresa',versionKey: false})
export class EmpresaSchema extends EmpresaDomainEntity {
 
  @Prop({
    type: String,
    index: true,
    required: true,
  })
  nombre: string;

  @Prop({
      type: String,
      index: true,
      unique: true,
      required: true,
    })
    mail: string;
    
    @Prop({
        type: String,
        index: true,
        required: true,
    })
    clave: string;


    @Prop({
      type: Number,
      index: true,
      required: true,
    })
    cantidadEmpleado:number;

    @Prop({
      type: Number,
      index: true,
      unique: true,
      required: true,
    })
    rut:number;

    @Prop({
      type: String,
      index: true,
      required: true,
    })
    rubro: string 
}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type EmpresaDocument = HydratedDocument<EmpresaSchema>;

export const EmpresaSchemaFactory = SchemaFactory.createForClass(EmpresaSchema);