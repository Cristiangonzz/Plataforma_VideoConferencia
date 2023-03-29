import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { RegistrarPersonaDto } from '../registrar-persona.dto';


describe('RegistrarPersonaDto', () => {
  let dto: RegistrarPersonaDto;

  beforeEach(() => {
    dto = new RegistrarPersonaDto();
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('should have a property nombre', () => {
    // Arrange
    const nombre = 'John Doe';
    const expected = 'John Doe';
    const type = 'string';

    // Act
    dto = new RegistrarPersonaDto();
    dto.nombre = nombre;

    // Assert
    expect(dto.nombre).toBeDefined();
    expect(dto.nombre).toBe(expected);
    expect(typeof dto.nombre).toBe(type);
  });

  it('should have a property nombre with a string value', async () => {
    // Arrange
    const nombre = undefined;
    const usuarioDTO = plainToInstance(RegistrarPersonaDto, { nombre });
    const expected = {
      isNotEmpty: 'nombre should not be empty',
      isString: 'nombre must be a string',
    };

    // Act
    const errors = await validate(usuarioDTO);

    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(JSON.stringify(expected));
  });
});