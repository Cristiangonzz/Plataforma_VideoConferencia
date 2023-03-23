import { Test, TestingModule } from '@nestjs/testing';
import { ListaUsuarioController } from './lista-usuario.controller';
import { ListaUsuarioService } from './lista-usuario.service';

describe('ListaUsuarioController', () => {
  let listaUsuarioController: ListaUsuarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListaUsuarioController],
      providers: [ListaUsuarioService],
    }).compile();

    listaUsuarioController = app.get<ListaUsuarioController>(ListaUsuarioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(listaUsuarioController.getHello()).toBe('Hello World!');
    });
  });
});
