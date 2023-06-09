import { EmpresaDomainEntity } from "./empresa.model";


describe('EmpresaDomainEntity', () => {
    let entity: EmpresaDomainEntity;
  
    beforeEach(() => {
      entity = new EmpresaDomainEntity();
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

      //-------------------cantidadEmpleado-------------------
      it('should have a cantidadEmpleado property', () => {
        // Arrange
        const cantidadEmpleado = 12;
    
        // Act
        entity.cantidadEmpleado = cantidadEmpleado;
    
        // Assert
        expect(entity.cantidadEmpleado).toBeDefined();
      });

      //-------------------rut--------------------------------
      it('should have a rut property', () => {
        // Arrange
        const rut = 12123;
    
        // Act
        entity.rut = rut;
    
        // Assert
        expect(entity.rut).toBeDefined();
      });
      //-------------------rubro------------------------------
      it('should have a rubro property', () => {
        // Arrange
        const rubro = "deporte";
    
        // Act
        entity.rubro = rubro;
    
        // Assert
        expect(entity.rubro).toBeDefined();
      });

      describe('setPassword', () => {
        it('debería cifrar la contraseña utilizando sha256', () => {
          const empresa = new EmpresaDomainEntity();
          const clave = 'contraseña';
          empresa.clave = clave;
          const hash = 'edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5';
          empresa.setPassword(clave);
          expect(empresa.clave).toBe(hash);
        });
      });
});