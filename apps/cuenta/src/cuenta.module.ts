import { Module } from '@nestjs/common';
import { AudioConferenciaService } from './infraestructura/services/audio-conferencia.service';
import { EventoController } from './evento.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MongoModuleCuenta } from './infraestructura/dataBase/mongoose.cuenta.module';
import { MensajeriaModuleCuenta } from './infraestructura/menssaging/mensajeria.cuenta.module';
import { VideoConferenciaService } from './infraestructura/services/video-conferencia.service';
import { AudioConferenciaRepository } from './infraestructura/dataBase/repository/audio-conferencia.repositoy';
import { VideoConferenciaRepository } from './infraestructura/dataBase/repository/video-conferencia.repositoy';
import { VideoConferenciaController } from './infraestructura/controllers/video-conferencia.controller';
import { AudioConferenciaController } from './infraestructura/controllers/audio-conferencia.controller';
import { EventoRespuestaUsuarioController } from './respuestas-evento-usuario.controller';

@Module({
  imports: [
    MensajeriaModuleCuenta,
    MongoModuleCuenta,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
        ),
      }),
  ],
  controllers: [
    EventoController,
    VideoConferenciaController,
    AudioConferenciaController,
    //Respuesta de usuario
    EventoRespuestaUsuarioController,
  ],
  providers: [
    ConfigService,
    AudioConferenciaService,
    VideoConferenciaService,

    AudioConferenciaRepository,
    VideoConferenciaRepository,

  
  ],
})
export class CuentaModule {}
