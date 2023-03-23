import { Controller, Get } from '@nestjs/common';
import { CuentaService } from './cuenta.service';

@Controller()
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Get()
  getHello(): string {
    return this.cuentaService.getHello();
  }
}
