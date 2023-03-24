import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema, personaSchemaFactory } from './schema/persona.shema';
import { MongooseConfigService } from './config/mongoose.config';
import { PersonaController } from '../controllers/persona.controller';
import { PersonaMongoService } from './services/persona.service.mongo';
import { EmpresaRepository } from './repository/empresa.repository';
import { PersonaRepository } from './repository/persona.repositoy';
import { EmpresaSchema, EmpresaSchemaFactory } from './schema/empresa.shema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeature([
      {name:PersonaSchema.name , schema:personaSchemaFactory},
      {name:EmpresaSchema.name , schema:EmpresaSchemaFactory} 
    ])
  ],
  controllers: [],//controladores (persona , empresa)
  providers: [
    MongooseConfigService,

    PersonaMongoService,
    EmpresaRepository,
    PersonaRepository],//servicios y repos(persona , empresa)
  exports: [
    MongooseModule,
    MongooseConfigService,
    EmpresaRepository,
    PersonaRepository,
    PersonaMongoService,],//se necesita exportar los repo?
})
export class MongoModule {}
