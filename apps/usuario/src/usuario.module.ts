import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructura/dataBase/mongoose.module';
import { PersonaService } from './infrastructura/service/persona.service';
import { PersonaController } from './infrastructura/controllers/persona.controller';
import { EmpresaRepository } from './infrastructura/dataBase/repository/empresa.repository';
import { PersonaRepository } from './infrastructura/dataBase/repository/persona.repositoy';
import { EmpresaService } from './infrastructura/service/empresa.service';

@Module({
  imports: [MongoModule],
  controllers: [PersonaController],
  providers: [
    PersonaService,
    EmpresaService,
    EmpresaRepository,
    PersonaRepository,
  ],
})
export class UsuarioModule {}
