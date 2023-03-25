import { Module } from '@nestjs/common';
import { CuentaService } from './infraestructura/services/cuenta.service';
import { EventoController } from './evento.controller';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { MongoModuleCuenta } from './infraestructura/dataBase/mongoose.cuenta.module';
import { MensajeriaModuleCuenta } from './infraestructura/menssaging/mensajeria.cuenta.module';

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
  providers: [CuentaService],
})
export class CuentaModule {}
