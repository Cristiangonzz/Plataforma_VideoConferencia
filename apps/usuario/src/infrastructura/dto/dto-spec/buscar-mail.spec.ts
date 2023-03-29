import { plainToInstance } from 'class-transformer';
import { validate, IsEmail } from 'class-validator';
import { RegistrarPersonaDto } from '../registrar-persona.dto';
import { Body } from '@nestjs/common';
import { BuscarMail } from '../buscar-mail..dto';


describe('BuscarMail', () => {
  let dto: BuscarMail;

  beforeEach(() => {
    dto = new BuscarMail();
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('tiene que contener el valor mail', () => {
    // Arrange
    const mail = 'cristian';
    const expected = 'cristian';
    const type = 'string';

    // Act
    dto = new BuscarMail();
    dto.mail = mail;

    // Assert
    expect(dto.mail).toBeDefined();
    expect(dto.mail).toBe(expected);
    expect(typeof dto.mail).toBe(type);
  });

  // ----------------EMAIL--------------------
  it('tiene que contener el valor email', () => {
    // Arrange
    const mail = 'cristian@gmail.com';
    const expected = 'cristian@gmail.com';
    const type = 'string';

    // Act
    dto = new BuscarMail();
    dto.mail = mail;

    // Assert
    expect(dto.mail).toBeDefined();
    expect(dto.mail).toBe(expected);
    expect(typeof dto.mail).toBe(type);
  });

  it('debe de tener el valor String la propiedad email', async () => {
    // Arrange
    const mail = undefined;
    const usuarioDTO = plainToInstance(BuscarMail, { mail });
    const expected = {
      isEmail: 'mail must be an email',
    };

    // Act
    const errors = await validate(usuarioDTO);
   
    
    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[0].constraints)).toBe(JSON.stringify(expected));
  });

 
});