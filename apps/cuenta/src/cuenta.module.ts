import { Module } from '@nestjs/common';
import { CuentaController } from './cuenta.controller';
import { CuentaService } from './cuenta.service';

@Module({
  imports: [],
  controllers: [CuentaController],
  providers: [CuentaService],
})
export class CuentaModule {}
