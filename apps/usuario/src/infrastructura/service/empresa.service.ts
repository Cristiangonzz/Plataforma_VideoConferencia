import { Injectable } from '@nestjs/common';
import { EmpresaMongoService } from '../dataBase/services/empresa.service.mongo';

@Injectable()
export class EmpresaService extends EmpresaMongoService  {
}
