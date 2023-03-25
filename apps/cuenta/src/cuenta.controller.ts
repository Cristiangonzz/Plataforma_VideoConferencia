import { Controller, Get } from '@nestjs/common';
import { CuentaService } from './cuenta.service';

@Controller()
export class CuentaController {
  @EventPattern('persona-registrada')

  @Get()
  getHello(): string {
    return this.cuentaService.getHello();
  }
}
