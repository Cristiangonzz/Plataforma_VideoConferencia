import { Module } from '@nestjs/common';
import { ListaUsuarioController } from './lista-usuario.controller';
import { ListaUsuarioService } from './lista-usuario.service';

@Module({
  imports: [],
  controllers: [ListaUsuarioController],
  providers: [ListaUsuarioService],
})
export class ListaUsuarioModule {}
