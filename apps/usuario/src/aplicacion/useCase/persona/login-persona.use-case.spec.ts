import { Observable, of } from 'rxjs';
import { PersonaSchema } from '../../../../src/infrastructura/dataBase/schema/persona.shema';
import { PersonaMongoService } from '../../../../src/infrastructura/dataBase/services/persona.service.mongo';
import { PersonaDomainEntity } from '../../../dominio/model/persona';
import { LogearPersonaoUseCase } from './login-persona.use-case';
import { LogearseDto } from '../../../../src/infrastructura/dto/logarse.dto';
import * as jwt from 'jsonwebtoken';

describe('LogearPersonaoUseCase', () => {
  let useCase: LogearPersonaoUseCase;
  let service: PersonaMongoService;

  beforeEach(() => {
    service = {
        findOneBy: jest.fn(),
    } as any as  PersonaMongoService;
    useCase = new LogearPersonaoUseCase(service);
  });

  it('verificar que se defina', () => {
    expect(useCase).toBeDefined();
  });

  // it('llamar a service.findOneBy', (done) => {
  //   // Arrange
  //   const _id = '641c65deff0153dd0f36bf5';
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25hIjp7Il9pZCI6IjY0MjY1MWRmZDJjM2ZjOTVkOWRmYTFjZCIsIm5vbWJyZSI6ImNyaXN0aWFuIiwibWFpbCI6ImNyaXNnb256YWxlekBnbWlhbC5jb20iLCJjbGF2ZSI6IjU5OTQ0NzFhYmIwMTExMmFmY2MxODE1OWY2Y2M3NGI0ZjUxMWI5OTgwNmRhNTliM2NhZjVhOWMxNzNjYWNmYzUifSwiaWF0IjoxNjgwMjMzNDU4fQ.KNgjqLcMRJf4fp_ZUCCvMvYxVmFpxaYxJ88Zq5vs6JQ';
  //   const payload: LogearseDto = 
  //   { 
  //       mail: "cris@gmail.com",
  //       clave: "123", 
  //   };
  //   const mockData: PersonaSchema = 
  //   { 
  //       nombre: "cristian",
  //       mail: "cris@gmail.com",
  //       clave: "123", 
  //       setPassword: expect.any(Function),
  //   };
  //   const expectedData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25hIjp7Il9pZCI6IjY0MjY1MWRmZDJjM2ZjOTVkOWRmYTFjZCIsIm5vbWJyZSI6ImNyaXN0aWFuIiwibWFpbCI6ImNyaXNnb256YWxlekBnbWlhbC5jb20iLCJjbGF2ZSI6IjU5OTQ0NzFhYmIwMTExMmFmY2MxODE1OWY2Y2M3NGI0ZjUxMWI5OTgwNmRhNTliM2NhZjVhOWMxNzNjYWNmYzUifSwiaWF0IjoxNjgwMjMzNDU4fQ.KNgjqLcMRJf4fp_ZUCCvMvYxVmFpxaYxJ88Zq5vs6JQ';
  //   const expectedInstanceType = Observable<string>;
    
  //   jest.spyOn(service, 'findOneBy').mockReturnValueOnce(of(mockData));
  //   jest.spyOn(jwt, 'sign').mockReturnValueOnce('token');

  //   // Act
  //   const result = useCase.execute(payload);

  //   // Assert
  //  // expect(service.findOneBy).toHaveBeenCalledWith( mockData.mail);
  //   expect(result).toBeInstanceOf(expectedInstanceType);
  //   result.subscribe({
  //     next: (data) => {
  //       expect(data).toEqual(expectedData);
  //     },
  //     complete: () => done(),
  //   });
  // });
});
