import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructura/dataBase/mongoose.module';
import { PersonaService } from './infrastructura/service/persona.service';
import { PersonaController } from './infrastructura/controllers/persona.controller';
import { EmpresaRepository } from './infrastructura/dataBase/repository/empresa.repository';
import { PersonaRepository } from './infrastructura/dataBase/repository/persona.repositoy';
import { EmpresaService } from './infrastructura/service/empresa.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EmpresaController } from './infrastructura/controllers/empresa.controller';
import { MensajeriaModule } from './infrastructura/messanging/mensajeria.module';

@Module({
  imports: [
    MensajeriaModule,
    MongoModule, 
     ConfigModule.forRoot({
       isGlobal: true,
       envFilePath: join(
         process.cwd(),
         'environments',
         `.env.${process.env.SCOPE?.trimEnd()}`,
         ),
       }),
  ],
  controllers: [PersonaController, EmpresaController],
  providers: [
    ConfigService,

    PersonaService,
    EmpresaService,

    EmpresaRepository,
    PersonaRepository,
  ],
})
export class UsuarioModule {}
