import { plainToInstance } from 'class-transformer';
import { validate, IsEmail } from 'class-validator';
import { RegistrarPersonaDto } from '../registrar-persona.dto';
import { Body } from '@nestjs/common';
import { LogearseDto } from '../logarse.dto';


describe('LogearseDto', () => {
  let dto: LogearseDto;

  beforeEach(() => {
    dto = new LogearseDto();
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });


  // ----------------EMAIL--------------------
  it('tiene que contener el valor email', () => {
    // Arrange
    const mail = 'cristian@gmail.com';
    const expected = 'cristian@gmail.com';
    const type = 'string';

    // Act
    dto = new LogearseDto();
    dto.mail = mail;

    // Assert
    expect(dto.mail).toBeDefined();
    expect(dto.mail).toBe(expected);
    expect(typeof dto.mail).toBe(type);
  });

  it('debe de tener el valor String la propiedad email', async () => {
    // Arrange
    const mail = undefined;
    const usuarioDTO = plainToInstance(LogearseDto, { mail });
    const expected = {
      isEmail: 'mail must be an email',
    };

    // Act
    const errors = await validate(usuarioDTO);
   
    
    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[0].constraints)).toBe(JSON.stringify(expected));
  });

  // ----------------clave--------------------

  it('tiene que contener el valor clave', () => {
    // Arrange
    const clave = '123';
    const expected = '123';
    const type = 'string';

    // Act
    dto = new LogearseDto();
    dto.clave = clave;

    // Assert
    expect(dto.clave).toBeDefined();
    expect(dto.clave).toBe(expected);
    expect(typeof dto.clave).toBe(type);
  });

  it('debe de tener el valor String la propiedad clave', async () => {
    // Arrange
    const clave = undefined;
    const usuarioDTO = plainToInstance(LogearseDto, { clave });
    const expected = {
        isString: 'clave must be a string',
    };

    // Act
    const errors = await validate(usuarioDTO);
   
    
    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[1].constraints)).toBe(JSON.stringify(expected));
  });
});