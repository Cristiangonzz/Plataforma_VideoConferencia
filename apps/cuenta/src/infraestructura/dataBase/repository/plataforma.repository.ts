import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from, map } from "rxjs";
import { Model } from "mongoose";
import { ICuentaRepository } from '../../../dominio/repositorios/plataforma.repositorio';
import { PlataformaSchema, PlataformaDocument } from '../schema/plataforma.schema';

@Injectable()
export class PlataformaRepository implements ICuentaRepository<PlataformaSchema>{
    
    constructor(
        @InjectModel(PlataformaSchema.name) private readonly plataformaModel: Model<PlataformaDocument>) { }
    
    registar(plataforma: PlataformaSchema): Observable<PlataformaSchema> {
        return from(this.plataformaModel.create(plataforma));
    }
    
    findAll(): Observable<PlataformaSchema[]> {
       
        return from(this.plataformaModel.find()) 
            .pipe(
                map((plataforma: PlataformaDocument[] ) =>  {
                    return plataforma;
                } ));
    }

    findOneBy(id: string): Observable<PlataformaSchema> {
        return from(this.plataformaModel.findById(id))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,plataforma: PlataformaSchema): Observable<PlataformaSchema> {
        return from(this.plataformaModel.findByIdAndUpdate(id, plataforma, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la plataforma');
                 })
    );
    }
//
    eliminar(id: string): Observable<PlataformaSchema> {
        return from(this.plataformaModel.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la plataforma');
            })
        );
    }


}