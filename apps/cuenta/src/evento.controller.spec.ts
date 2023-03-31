import { Test, TestingModule } from '@nestjs/testing';
import { EventoController } from './evento.controller';

describe('EventoController', () => {
  let controller: EventoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventoController],
    }).compile();

    controller = app.get<EventoController>(EventoController);
  });

  describe('personaCreada', () => {
    it('should log persona registrada', () => {
      const data = { data: { 
        nombre: "cristian",
        mail: "cris@gmail.com",
        clave: "123",
        _id: "6425e193cc50b70709e09bfe"} };
      const consoleSpy = jest.spyOn(console, 'log');
      
      controller.personaCreada(data);

      expect(consoleSpy).toHaveBeenCalledWith('Persona registrada', data);
    });
  });
});