import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from, map } from "rxjs";

import { IUsuarioRepository } from "apps/usuario/src/dominio/repositories/usuario-repository-base.repositoy";
import { Model } from "mongoose";
import { EmpresaSchema, EmpresaDocument } from '../schema/empresa.shema';

@Injectable()
export class EmpresaRepository implements IUsuarioRepository<EmpresaSchema>{
    
    constructor(
        @InjectModel(EmpresaSchema.name) private readonly empresaModel: Model<EmpresaDocument>) { }
    
    registar(empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return from(this.empresaModel.create(empresa));
    }
    
    findAll(): Observable<EmpresaSchema[]> {
        //este find me devulve un arreglo de lo que le pase como parametro en repostiory y lo tipeo con empresaDocument
        return from(this.empresaModel.find()) //Como estoy usando lo inyectado y lo tipeo con empresaDocument entonces siempre me va a devolver un array de empresaDocument
            .pipe(
                map((empresa: EmpresaDocument[] ) =>  {
                    return empresa;
                } ));
    }

    findOneBy(id: string): Observable<EmpresaSchema> {
        return from(this.empresaModel.findOne({mail: id}))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return from(this.empresaModel.findByIdAndUpdate(id, empresa, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la empresa');
                 })
    );
    }
//
    eliminar(id: string): Observable<EmpresaSchema> {
        return from(this.empresaModel.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la empresa');
            })
        );
    }


}