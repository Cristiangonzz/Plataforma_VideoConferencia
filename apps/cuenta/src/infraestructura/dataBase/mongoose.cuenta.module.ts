import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose.config';
import { VideoConferenciaMongoService } from './services/video-conferencia.service.mongo';
import { VideoConferenciaRepository } from './repository/video-conferencia.repositoy';
import { ConfigService } from '@nestjs/config';
import { VideoconferenciaFactory, VideoConferenciaSchema } from './schema/video-conferencia.schema';
import { AudioConferenciaSchema, AudioconferenciaFactory } from './schema/audio-conferencia.schema';
import { AudioConferenciaMongoService } from './services/audio-conferencia.service.mongo copy';
import { AudioConferenciaRepository } from './repository/audio-conferencia.repositoy';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeature([
      {name:VideoConferenciaSchema.name , schema:VideoconferenciaFactory} ,
      {name:AudioConferenciaSchema.name , schema:AudioconferenciaFactory} ,
    ])
  ],
  controllers: [],
  providers: [
    MongooseConfigService,
    ConfigService,

    
    VideoConferenciaMongoService,
    AudioConferenciaMongoService,


    AudioConferenciaRepository,
    VideoConferenciaRepository,

  ],
  exports: [
    ConfigService,
    MongooseModule,
    MongooseConfigService,

    AudioConferenciaMongoService,
    AudioConferenciaRepository,
    
    VideoConferenciaMongoService,

    VideoConferenciaRepository,

  ],
})
export class MongoModuleCuenta {}
