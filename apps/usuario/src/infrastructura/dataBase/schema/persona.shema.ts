import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PersonaDomainEntity } from '../../../dominio/model/persona';


@Schema({collection: 'Persona',versionKey: false})
export class PersonaSchema extends PersonaDomainEntity {
  @Prop({
      type: String,
      index: true,
      required: true,
  })
  nombreCompleto: string;

  @Prop({
      type: String,
      index: true,
      unique: true,
      required: true,
    })
    mail: number;
    
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