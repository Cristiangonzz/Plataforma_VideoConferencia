import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructura/dataBase/mongoose.module';
import { PersonaService } from './infrastructura/service/persona.service';
import { PersonaController } from './infrastructura/controllers/persona.controller';
import { EmpresaRepository } from './infrastructura/dataBase/repository/empresa.repository';
import { PersonaRepository } from './infrastructura/dataBase/repository/persona.repositoy';

@Module({
  imports: [MongoModule],
  controllers: [PersonaController],
  providers: [
    PersonaService,
    EmpresaRepository,
    PersonaRepository,],
})
export class UsuarioModule {}
