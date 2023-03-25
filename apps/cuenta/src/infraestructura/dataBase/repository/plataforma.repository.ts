import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from, map } from "rxjs";
import { Model } from "mongoose";
import { ICuentaRepository } from '../../../dominio/repositorios/plataforma.repositorio';
import { PlataformaSchema, PlataformaDocument } from '../schema/plataforma.schema';

@Injectable()
export class PlataformaRepository implements ICuentaRepository<PlataformaSchema>{
    
    constructor(
        @InjectModel(PlataformaSchema.name) private readonly empresaModel: Model<PlataformaDocument>) { }
    
    registar(empresa: PlataformaSchema): Observable<PlataformaSchema> {
        return from(this.empresaModel.create(empresa));
    }
    
    findAll(): Observable<PlataformaSchema[]> {
        //este find me devulve un arreglo de lo que le pase como parametro en repostiory y lo tipeo con empresaDocument
        return from(this.empresaModel.find()) //Como estoy usando lo inyectado y lo tipeo con empresaDocument entonces siempre me va a devolver un array de empresaDocument
            .pipe(
                map((empresa: PlataformaDocument[] ) =>  {
                    return empresa;
                } ));
    }

    findOneBy(id: string): Observable<PlataformaSchema> {
        return from(this.empresaModel.findOne({mail: id}))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,empresa: PlataformaSchema): Observable<PlataformaSchema> {
        return from(this.empresaModel.findByIdAndUpdate(id, empresa, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la empresa');
                 })
    );
    }
//
    eliminar(id: string): Observable<PlataformaSchema> {
        return from(this.empresaModel.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la empresa');
            })
        );
    }


}