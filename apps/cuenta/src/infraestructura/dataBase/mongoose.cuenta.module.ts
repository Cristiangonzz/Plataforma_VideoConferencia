import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema, personaSchemaFactory } from './schema/video-conferencia.schema';
import { MongooseConfigService } from './config/mongoose.config';
import { PersonaMongoService } from './services/video-conferencia.service.mongo';
import { EmpresaRepository } from './repository/plataforma.repository';
import { PersonaRepository } from './repository/video-conferencia.repositoy';
import { EmpresaMongoService } from './services/plataforma.service.mongo';
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
