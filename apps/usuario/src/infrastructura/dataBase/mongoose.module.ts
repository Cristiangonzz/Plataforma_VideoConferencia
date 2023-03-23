import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema, personaSchemaFactory } from './schema/persona.shema';
import { MongooseConfigService } from './config/mongoose.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeature([
      {name:PersonaSchema.name , schema:personaSchemaFactory} //MongooseModule.. }], 'cats'),  creo que es el nombre de la coleccion 
    ])
  ],
  controllers: [],//controladores (persona , empresa)
  providers: [],//servicios y repos(persona , empresa)
  exports: [],//se necesita exportar los repo?
})
export class UsuarioModule {}
