import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema, personaSchemaFactory } from './schema/persona.shema';
import { MongooseConfigService } from './config/mongoose.config';
import { PersonaMongoService } from './services/persona.service.mongo';
import { EmpresaRepository } from './repository/empresa.repository';
import { PersonaRepository } from './repository/persona.repositoy';
import { EmpresaSchema, EmpresaSchemaFactory } from './schema/empresa.shema';
import { EmpresaMongoService } from './services/empresa.service.mongo';
import { ConfigService } from '@nestjs/config';

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
  controllers: [],
  providers: [
    MongooseConfigService,
    ConfigService,

    PersonaMongoService,
    EmpresaMongoService,

    EmpresaRepository,
    PersonaRepository,
  ],
  exports: [
    ConfigService,


    MongooseModule,
    MongooseConfigService,

    PersonaMongoService,
    EmpresaMongoService,
    
    PersonaRepository,
    EmpresaRepository,

  ],
})
export class MongoModule {}
