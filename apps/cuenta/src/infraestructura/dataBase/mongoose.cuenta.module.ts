import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose.config';
import { VideoConferenciaMongoService } from './services/video-conferencia.service.mongo';
import { VideoConferenciaRepository } from './repository/video-conferencia.repositoy';
import { ConfigService } from '@nestjs/config';
import { VideoconferenciaFactory, videoConferenciaSchema } from './schema/video-conferencia.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeature([
      {name:videoConferenciaSchema.name , schema:VideoconferenciaFactory} 
    ])
  ],
  controllers: [],
  providers: [
    MongooseConfigService,
    ConfigService,

    
    VideoConferenciaMongoService,

    VideoConferenciaRepository,
  ],
  exports: [
    ConfigService,
    MongooseModule,
    MongooseConfigService,

    
    VideoConferenciaMongoService,

    VideoConferenciaRepository,

  ],
})
export class MongoModuleCuenta {}
