import { Injectable } from '@nestjs/common';

@Injectable()
export class CuentaService {
  getHello(): string {
    return 'Hello World!';
  }
}
