import { PersonaDomainEntity } from "./persona";

describe('PersonaDomainEntity', () => {
    let entity: PersonaDomainEntity;
  
    beforeEach(() => {
      entity = new PersonaDomainEntity();
    });
  
    it('should be defined', () => {
      expect(entity).toBeDefined();
    });
  //------------------nombre------------------
    it('should have a nombre property', () => {
      // Arrange
      const nombre = 'cristian';
  
      // Act
      entity.nombre = nombre;
  
      // Assert
      expect(entity.nombre).toBeDefined();
    });
  //------------------mail------------------
    it('should have a mail property', () => {
      // Arrange
      const mail = "adolfo@gmail.com";
  
      // Act
      entity.mail= mail;
  
      // Assert
      expect(entity.mail).toBeDefined();
    });

    //-------------------clave-------------------
    it('should have a clave property', () => {
        // Arrange
        const clave = "123456";
    
        // Act
        entity.clave = clave;
    
        // Assert
        expect(entity.clave).toBeDefined();
      });

  describe('setPassword', () => {
    it('debería cifrar la contraseña utilizando sha256', () => {
      const persona = new PersonaDomainEntity();
      const clave = 'contraseña';
      persona.clave = clave;
      const hash = 'edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5';
      persona.setPassword(clave);
      expect(persona.clave).toBe(hash);
    });
  });
});