import { EmpresaRegistradaPublisher } from "../messanging/publisher/empresa/empresa-registrada.publisher";
import { EmpresaService } from '../service/empresa.service';
import { EmpresaBuscadaPublisher } from '../messanging/publisher/empresa/empresa-buscada.publisher';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable, catchError, tap } from "rxjs";
import { EmpresaDomainEntity } from "../../dominio/model/empresa.model";
import { BuscarMail } from "../dto/buscar-mail..dto";
import { RegistrarEmpresaDto } from "../dto/registrar-empresa.dto";
import { RegistrarEmpresaUseCase } from "../../aplicacion/useCase/empresa/registrar-empresa.use-case";
import { BuscarEmpresaUseCase } from '../../aplicacion/useCase/empresa/buscar-empresa.use.case';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Empresa')
@Controller('empresa')
export class EmpresaController {
    constructor(
        private readonly empresaRegistradaPublisher : EmpresaRegistradaPublisher,
        private readonly empresaService: EmpresaService,
        private readonly empresaBuscadaPublisher: EmpresaBuscadaPublisher,
    ) {}

    @ApiOperation ({summary: "Crear  Empresa"})
    @Post('/crear')
     /**
      * The function crearEmpresa() takes a RegistrarEmpresaDto object as a parameter, and returns an
      * Observable of type EmpresaDomainEntity.
      * @param {RegistrarEmpresaDto} Empresa - RegistrarEmpresaDto
      * @returns The observable is being returned.
      */
     crearEmpresa(@Body() Empresa: RegistrarEmpresaDto):Observable<EmpresaDomainEntity> {
        const caso = new RegistrarEmpresaUseCase(this.empresaService);
        return caso.execute(Empresa)
        .pipe(
            tap((Empresa:RegistrarEmpresaDto) => {
                this.empresaRegistradaPublisher.publish(Empresa);
            },
            (error:Error) => {
                console.log(error);
            }));
    }

    @ApiOperation ({summary: "Buscar  Empresa"})
     @Get('buscar')
     /**
      * BuscarEmpresa" is a function that receives a parameter of type "BuscarMail" and returns an
      * observable of type "EmpresaDomainEntity
      * @param {BuscarMail} id - BuscarMail
      * @returns The observable is being returned.
      */
     buscarEmpresa(@Body() id: BuscarMail ):Observable<EmpresaDomainEntity>{
        const caso = new BuscarEmpresaUseCase(this.empresaService);
        
        return caso.execute(id.mail).pipe(tap((data: EmpresaDomainEntity) =>{
            this.empresaBuscadaPublisher.publish(data);
        },
        catchError((error) => {
            // Manejo de errores
            console.error('Se produjo un error al buscar la persona', error);
            throw new Error('No se pudo buscar la persona');
       
        })));
     }
}