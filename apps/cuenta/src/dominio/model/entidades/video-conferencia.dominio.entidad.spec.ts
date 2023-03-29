import { VideoConferenciaDomainEntity } from "./video-conferencia.dominio.entidad";

describe('VideoConferenciaDomainEntity', () => {
    let entity: VideoConferenciaDomainEntity;
  
    beforeEach(() => {
      entity = new VideoConferenciaDomainEntity();
    });
  
    it('should be defined', () => {
      expect(entity).toBeDefined();
    });
  //------------------anfitrion------------------
    it('should have a anfitrion property', () => {
      // Arrange
      const anfitrion = 'cris@gmail.com';
  
      // Act
      entity.anfitrion = anfitrion;
  
      // Assert
      expect(entity.anfitrion).toBeDefined();
    });
  //------------------participante------------------
    it('should have a participante property', () => {
      // Arrange
      const participante = ["adolfo@gmail.com","matilde@gmail.com"];
  
      // Act
      entity.participante = participante;
  
      // Assert
      expect(entity.participante).toBeDefined();
    });

    //-------------------chatVivo-------------------
    it('should have a chatVivo property', () => {
        // Arrange
        const chatVivo = true;
    
        // Act
        entity.chatVivo = chatVivo;
    
        // Assert
        expect(entity.chatVivo).toBeDefined();
      });
    //-------------------grabacion-------------------
    it('should have a grabacion property', () => {
        // Arrange
        const grabacion = false;
    
        // Act
        entity.grabacion = grabacion;
    
        // Assert
        expect(entity.grabacion).toBeDefined();
      });
    //-------------------pizzarra-------------------
    it('should have a pizzarra property', () => {
        // Arrange
        const pizzarra = false;
    
        // Act
        entity.pizzarra = pizzarra;
    
        // Assert
        expect(entity.pizzarra).toBeDefined();
      });
    //-------------------compartirArchivo-------------------
    it('should have a compartirArchivo property', () => {
        // Arrange
        const compartirArchivo = false;
    
        // Act
        entity.compartirArchivo = compartirArchivo;
    
        // Assert
        expect(entity.compartirArchivo).toBeDefined();
      });
    //-------------------presentacion-------------------
    it('should have a presentacion property', () => {
        // Arrange
        const presentacion = false;
    
        // Act
        entity.presentacion = presentacion;
    
        // Assert
        expect(entity.presentacion).toBeDefined();
      });

});