import { Module } from '@nestjs/common';
import { AudioConferenciaService } from './infraestructura/services/audio-conferencia.service';
import { EventoController } from './evento.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MongoModuleCuenta } from './infraestructura/dataBase/mongoose.cuenta.module';
import { MensajeriaModuleCuenta } from './infraestructura/menssaging/mensajeria.cuenta.module';
import { VideoConferenciaService } from './infraestructura/services/video-conferencia.service';

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
  controllers: [EventoController],
  providers: [
    ConfigService,
    AudioConferenciaService,
    VideoConferenciaService,

  
  ],
})
export class CuentaModule {}
