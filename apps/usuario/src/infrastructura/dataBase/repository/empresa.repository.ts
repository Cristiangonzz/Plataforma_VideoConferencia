import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from } from "rxjs";

import { IUsuarioRepository } from "../../../../src/dominio/repositories/usuario-repository-base.repositoy";
import { Model } from "mongoose";
import { EmpresaSchema, EmpresaDocument } from '../schema/empresa.shema';

@Injectable()
export class EmpresaRepository implements IUsuarioRepository<EmpresaSchema>{
    
    constructor(
        @InjectModel(EmpresaSchema.name) private readonly empresaModel: Model<EmpresaDocument>) { }
    
    
    registar(empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return from(this.empresaModel.create(empresa));
    }

    findOneBy(id: string): Observable<EmpresaSchema> {
        return from(Promise.resolve(this.empresaModel.findOne({mail: id}))) // Promise.resolve() para convertir el resultado devuelto por findOne() en una promesa
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

//     actualizar(id:string ,empresa: EmpresaSchema): Observable<EmpresaSchema> {
//         return from(this.empresaModel.findByIdAndUpdate(id, empresa, {new: true}))
//             .pipe(
//                  catchError((err : Error) => {
//                  throw new Error('No se encontro la empresa');
//                  })
//     );
//     }
// //
//     eliminar(id: string): Observable<EmpresaSchema> {
//         return from(this.empresaModel.findByIdAndDelete(id))
//         .pipe(
//             catchError((err:Error) => {
//                 throw new Error('No se encontro la empresa');
//             })
//         );
//     }

    actualizar(id: string, persona: EmpresaSchema): Observable<EmpresaSchema> {
        throw new Error("Method not implemented.");
    }
    eliminar(id: string): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}