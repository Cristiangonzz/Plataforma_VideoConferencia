import { Controller, Get } from '@nestjs/common';
import { ListaUsuarioService } from './lista-usuario.service';

@Controller()
export class ListaUsuarioController {
  constructor(private readonly listaUsuarioService: ListaUsuarioService) {}

  @Get()
  getHello(): string {
    return this.listaUsuarioService.getHello();
  }
}
