import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { EventoController } from './evento.controller';

@Module({
  imports: [],
  controllers: [EventoController],
  providers: [CuentaService],
})
export class CuentaModule {}
