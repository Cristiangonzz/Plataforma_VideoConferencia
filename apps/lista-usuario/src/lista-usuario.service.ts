import { Injectable } from '@nestjs/common';

@Injectable()
export class ListaUsuarioService {
  getHello(): string {
    return 'Hello World!';
  }
}
