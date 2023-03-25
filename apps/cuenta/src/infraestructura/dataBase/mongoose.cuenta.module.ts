import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose.config';
import { VideoConferenciaMongoService } from './services/video-conferencia.service.mongo';
import { PlataformaRepository } from './repository/plataforma.repository';
import { VideoConferenciaRepository } from './repository/video-conferencia.repositoy';
import { PlataformaMongoService } from './services/plataforma.service.mongo';
import { ConfigService } from '@nestjs/config';
import { PlataformaSchema, PlataformaSchemaFactory } from './schema/plataforma.schema';
import { VideoconferenciaFactory, videoConferenciaSchema } from './schema/video-conferencia.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeature([
      {name:PlataformaSchema.name , schema:PlataformaSchemaFactory},
      {name:videoConferenciaSchema.name , schema:VideoconferenciaFactory} 
    ])
  ],
  controllers: [],
  providers: [
    MongooseConfigService,
    ConfigService,

    PlataformaMongoService,
    VideoConferenciaMongoService,

    PlataformaRepository,
    VideoConferenciaRepository,
  ],
  exports: [
    ConfigService,
    MongooseModule,
    MongooseConfigService,

    PlataformaMongoService,
    VideoConferenciaMongoService,

    PlataformaRepository,
    VideoConferenciaRepository,

  ],
})
export class MongoModuleCuenta {}
