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
    
    
    /**
     * This function takes an object of type EmpresaSchema and returns an Observable of type
     * EmpresaSchema.
     * @param {EmpresaSchema} empresa - EmpresaSchema
     * @returns An Observable of type EmpresaSchema
     */
    registar(empresa: EmpresaSchema): Observable<EmpresaSchema> {
        return from(this.empresaModel.create(empresa));
    }

    /**
     * I'm returning an Observable from a Promise that resolves to the result of a Mongoose query.
     * @param {string} id - string: The id of the document to find.
     * @returns The result of the query.
     */
    findOneBy(id: string): Observable<EmpresaSchema> {
        return from(Promise.resolve(this.empresaModel.findOne({mail: id}))) // Promise.resolve() para convertir el resultado devuelto por findOne() en una promesa
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    /**
     * The function actualizar() takes an id and a persona as parameters and returns an Observable of
     * type EmpresaSchema.
     * @param {string} id - string - The id of the document to update.
     * @param {EmpresaSchema} persona - EmpresaSchema
     */
    actualizar(id: string, persona: EmpresaSchema): Observable<EmpresaSchema> {
        throw new Error("Method not implemented.");
    }
    /**
     * This function returns an Observable of type boolean, and it takes a parameter of type string.
     * @param {string} id - string
     */
    eliminar(id: string): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}