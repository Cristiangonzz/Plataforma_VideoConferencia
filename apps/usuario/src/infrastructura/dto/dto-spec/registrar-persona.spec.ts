import { plainToInstance } from 'class-transformer';
import { validate, IsEmail } from 'class-validator';
import { RegistrarPersonaDto } from '../registrar-persona.dto';
import { Body } from '@nestjs/common';


describe('RegistrarPersonaDto', () => {
  let dto: RegistrarPersonaDto;

  beforeEach(() => {
    dto = new RegistrarPersonaDto();
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('tiene que contener el valor nombre', () => {
    // Arrange
    const nombre = 'cristian';
    const expected = 'cristian';
    const type = 'string';

    // Act
    dto = new RegistrarPersonaDto();
    dto.nombre = nombre;

    // Assert
    expect(dto.nombre).toBeDefined();
    expect(dto.nombre).toBe(expected);
    expect(typeof dto.nombre).toBe(type);
  });

  it('debe de tener el valor String la propiedad Nombre', async () => {
    // Arrange
    const nombre = undefined;
    const usuarioDTO = plainToInstance(RegistrarPersonaDto, { nombre });
    const expected = {
      isString: 'nombre must be a string',
    };

    // Act
    const errors = await validate(usuarioDTO);

    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(JSON.stringify(expected));
  });
  // ----------------EMAIL--------------------
  it('tiene que contener el valor email', () => {
    // Arrange
    const mail = 'cristian@gmail.com';
    const expected = 'cristian@gmail.com';
    const type = 'string';

    // Act
    dto = new RegistrarPersonaDto();
    dto.mail = mail;

    // Assert
    expect(dto.mail).toBeDefined();
    expect(dto.mail).toBe(expected);
    expect(typeof dto.mail).toBe(type);
  });

  it('debe de tener el valor String la propiedad email', async () => {
    // Arrange
    const mail = undefined;
    const usuarioDTO = plainToInstance(RegistrarPersonaDto, { mail });
    const expected = {
      isEmail: 'mail must be an email',
    };

    // Act
    const errors = await validate(usuarioDTO);
   
    
    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[1].constraints)).toBe(JSON.stringify(expected));
  });

  // ----------------clave--------------------

  it('tiene que contener el valor clave', () => {
    // Arrange
    const clave = '123';
    const expected = '123';
    const type = 'string';

    // Act
    dto = new RegistrarPersonaDto();
    dto.clave = clave;

    // Assert
    expect(dto.clave).toBeDefined();
    expect(dto.clave).toBe(expected);
    expect(typeof dto.clave).toBe(type);
  });

  it('debe de tener el valor String la propiedad clave', async () => {
    // Arrange
    const clave = undefined;
    const usuarioDTO = plainToInstance(RegistrarPersonaDto, { clave });
    const expected = {
        isString: 'clave must be a string',
    };

    // Act
    const errors = await validate(usuarioDTO);
   
    
    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[2].constraints)).toBe(JSON.stringify(expected));
  });
});