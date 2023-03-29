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
});