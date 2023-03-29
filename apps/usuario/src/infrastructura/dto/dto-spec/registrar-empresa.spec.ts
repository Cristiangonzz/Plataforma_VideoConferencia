import { plainToInstance } from 'class-transformer';
import { validate, IsEmail } from 'class-validator';
import { RegistrarPersonaDto } from '../registrar-persona.dto';
import { RegistrarEmpresaDto } from '../registrar-empresa.dto';



describe('RegistrarEmpresaDto', () => {
  let dto: RegistrarEmpresaDto;

  beforeEach(() => {
    dto = new RegistrarEmpresaDto();
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
});



// ----------------RUT--------------------
it('tiene que contener el valor cantidadEmpleado', () => {
    // Arrange
    const cantidadEmpleado = 2;
    const expected = 2;
    const type = 'number';

    // Act
    dto = new RegistrarEmpresaDto();
    dto.cantidadEmpleado = cantidadEmpleado;

    // Assert
    expect(dto.cantidadEmpleado).toBeDefined();
    expect(dto.cantidadEmpleado).toBe(expected);
    expect(typeof dto.cantidadEmpleado).toBe(type);
  });
  it('debe de tener el valor String la propiedad cantidadEmpleado', async () => {
    // Arrange
    const cantidadEmpleado = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { cantidadEmpleado });
    const expected = {
        isPositive:'cantidadEmpleado must be a positive number',
        isNumber:'cantidadEmpleado must be a number conforming to the specified constraints',
    };

    // Act
    const errors = await validate(usuarioDTO);

    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[3].constraints)).toBe(JSON.stringify(expected));
  });

// ----------------RUT--------------------
it('tiene que contener el valor rut', () => {
    // Arrange
    const rut = 123;
    const expected = 123;
    const type = 'number';

    // Act
    dto = new RegistrarEmpresaDto();
    dto.rut = rut;

    // Assert
    expect(dto.rut).toBeDefined();
    expect(dto.rut).toBe(expected);
    expect(typeof dto.rut).toBe(type);
  });
  it('debe de tener el valor String la propiedad rut', async () => {
    // Arrange
    const rut = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { rut });
    const expected = {
        isPositive:'rut must be a positive number',
        isNumber:'rut must be a number conforming to the specified constraints',
    };

    // Act
    const errors = await validate(usuarioDTO);

    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors[4].constraints)).toBe(JSON.stringify(expected));
  });

// ----------------RUBRO--------------------
it('tiene que contener el valor Rubro', () => {
    // Arrange
    const rubro = 'deporte';
    const expected = 'deporte';
    const type = 'string';

    // Act
    dto = new RegistrarEmpresaDto();
    dto.rubro = rubro;

    // Assert
    expect(dto.rubro).toBeDefined();
    expect(dto.rubro).toBe(expected);
    expect(typeof dto.rubro).toBe(type);
  });
  it('debe de tener el valor String la propiedad rubro', async () => {
    // Arrange
    const rubro = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { rubro });
    const expected = {
      isString: 'rubro must be a string',
    };

    // Act
    const errors = await validate(usuarioDTO);

    // Assert
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(JSON.stringify(expected));
  });

// ----------------Nombre--------------------
  it('tiene que contener el valor nombre', () => {
    // Arrange
    const nombre = 'cristian';
    const expected = 'cristian';
    const type = 'string';

    // Act
    dto = new RegistrarEmpresaDto();
    dto.nombre = nombre;

    // Assert
    expect(dto.nombre).toBeDefined();
    expect(dto.nombre).toBe(expected);
    expect(typeof dto.nombre).toBe(type);
  });
  it('debe de tener el valor String la propiedad Nombre', async () => {
    // Arrange
    const nombre = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { nombre });
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
    dto = new RegistrarEmpresaDto();
    dto.mail = mail;

    // Assert
    expect(dto.mail).toBeDefined();
    expect(dto.mail).toBe(expected);
    expect(typeof dto.mail).toBe(type);
  });

  it('debe de tener el valor String la propiedad email', async () => {
    // Arrange
    const mail = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { mail });
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
    dto = new RegistrarEmpresaDto();
    dto.clave = clave;

    // Assert
    expect(dto.clave).toBeDefined();
    expect(dto.clave).toBe(expected);
    expect(typeof dto.clave).toBe(type);
  });

  it('debe de tener el valor String la propiedad clave', async () => {
    // Arrange
    const clave = undefined;
    const usuarioDTO = plainToInstance(RegistrarEmpresaDto, { clave });
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