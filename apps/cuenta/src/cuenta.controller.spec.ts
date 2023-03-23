import { Test, TestingModule } from '@nestjs/testing';
import { CuentaController } from './cuenta.controller';
import { CuentaService } from './cuenta.service';

describe('CuentaController', () => {
  let cuentaController: CuentaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CuentaController],
      providers: [CuentaService],
    }).compile();

    cuentaController = app.get<CuentaController>(CuentaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cuentaController.getHello()).toBe('Hello World!');
    });
  });
});
