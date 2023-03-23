import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { EmpresaModel } from '../../../dominio/model/empresa.model';


@Schema({collection: 'Empresa',versionKey: false})
export class EmpresaSchema extends EmpresaModel {
 

  @Prop({
      type: String,
      index: true,
      unique: true,
      required: true,
    })
    mailEmpresarial: number;
    
    @Prop({
        type: String,
        index: true,
        required: true,
    })
    clave: string;
}

/**
 * define la forma en que los documentos deben ser organizados dentro de una colección.
 * hidrata el esquema ya definido de nodejs y mongoose para que sea como un documento de mongoDB
 */
export type PersonaDocument = HydratedDocument<PersonaSchema>;

export const personaSchemaFactory = SchemaFactory.createForClass(PersonaSchema);