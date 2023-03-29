import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import {  CrearAudioConferenciaDTO } from "../dto/crear-audio-conferencia.dto";


describe('CrearAudioConferenciaDTO', () => {
    let dto: CrearAudioConferenciaDTO;
  
    beforeEach(() => {
      dto = new CrearAudioConferenciaDTO();
    });
  
    it('should be defined', () => {
      expect(dto).toBeDefined();
    });
  
    it('tiene que contener el valor mail', () => {
      // Arrange
      const mail = 'cristian@gmail.com';
      const expected = 'cristian@gmail.com';
      const type = 'string';
  
      // Act
      dto = new CrearAudioConferenciaDTO();
      dto.anfitrion = mail;
  
      // Assert
      expect(dto.anfitrion).toBeDefined();
      expect(dto.anfitrion).toBe(expected);
      expect(typeof dto.anfitrion).toBe(type);
    });
  
    // ----------------EMAIL--------------------
    it('tiene que contener el valor email', () => {
      // Arrange
      const mail = 'cristian@gmail.com';
      const expected = 'cristian@gmail.com';
      const type = 'string';
  
      // Act
      dto = new CrearAudioConferenciaDTO();
      dto.anfitrion = mail;
  
      // Assert
      expect(dto.anfitrion).toBeDefined();
      expect(dto.anfitrion).toBe(expected);
      expect(typeof dto.anfitrion).toBe(type);
    });
  
    it('debe de tener el valor String la propiedad email', async () => {
      // Arrange
      const mail = undefined;
      const usuarioDTO = plainToInstance(CrearAudioConferenciaDTO, { mail });
      const expected = {
        isEmail: 'anfitrion must be an email',
      };
  
      // Act
      const errors = await validate(usuarioDTO);
     
      
      // Assert
      expect(errors.length).not.toBe(0);
      expect(JSON.stringify(errors[0].constraints)).toBe(JSON.stringify(expected));
    });
  
   
  });