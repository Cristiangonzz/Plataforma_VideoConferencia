 import { AudioConferenciaDomainEntity } from "./audio-conferencia.dominio.entidad";
 import { VideoConferenciaDomainEntity } from "./video-conferencia.dominio.entidad"
 describe('AudioConferenciaDomainEntity', () => {
     let entity: AudioConferenciaDomainEntity;
     beforeEach(() => {
       entity = new AudioConferenciaDomainEntity();
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

     it('should have a non-empty anfitrion property', () => {
      // Arrange
      const anfitrion = '';
    
      // Act
      entity.anfitrion = anfitrion;
    
      // Assert
      expect(entity).toBeTruthy();
    });
   //------------------participante------------------
     it('should have a participante property', () => {
       // Arrange
       const participante = ["adolfo@gmail.com","matilde@gmail.com"];
       // Act
       entity.participantes = participante;
       // Assert
       expect(entity.participantes).toBeDefined();
     })

     //-------------------audio-------------------
     
     it('should have a audio property', () => {
         // Arrange
         const audio = true;  
         // Act
         entity.audio = audio;  
         // Assert
         expect(entity.audio).toBeDefined();
       });
 });